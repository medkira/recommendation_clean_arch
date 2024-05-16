import { Router, Request, Response } from "express";
import { makeSignInGoogleAuthController } from "@main/factories/controllers/googleAuth/sign-in-google-auth";
import { googleAuthMiddleware } from "@main/factories/middlewares/google-middleware-factory";
import { makeGetGoogleUserByEmail } from "@main/factories/use-case/googleAuth/get-google-user-auth";
import { UserNotFoundError } from "@application/errors/UserNotFoundError";
import { makeSignIn } from "@main/factories/use-case/authentication/sign-in-factory";
import { makeSignUpOwner } from "@main/factories/use-case/authentication/sign-up-owner-factory";
import { UserRole } from "@domain/entities/User";
import { SignUpOwnerInterface } from "@application/interfaces/use-cases/authentication/SignUpOwnerInterface";
import { makeSignUpNormalUser } from "@main/factories/use-case/authentication/sign-up-normalUser-factory";
import { SignUpNormalUserInterface } from "@application/interfaces/use-cases/authentication/SignUpNormalUserInterface";
import { BaseController } from "@infra/http/controllers/BaseController";
import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";


export default (router: Router): void => {
  router.get('/google', googleAuthMiddleware);
  router.get('/loginGoogle', googleAuthMiddleware, multiPageRenderAdapter(makeSignInGoogleAuthController()));

  router.post('/finishSignin', expressRouterAdapterFinsihSetRoleController);

};


export const multiPageRenderAdapter = (
  controller: BaseController,

) => async (req: Request, res: Response) => {
  const httpRequest: HttpRequest = {
    body: req.body,
    params: req.params,
    query: req.query,
    headers: req.headers,
    files: req.files,
    userId: req.userId,
    userRole: req.userRole,
    host: req.get('host'),
    protocole: req.protocol,
  }

  const httpResponse = await controller.handle(httpRequest);

  if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {

    // ? if no user redirect to selectRole : signup
    if (httpResponse.body.view == 'google-auth/setUserRoleView') {
      // console.log(httpResponse)
      res.render(httpResponse.body.view, { token: httpResponse.body.token }); // this an email i called it token need to be fixed token {email}


      // ? if user exist redirect to signin : render home page with cookie
    } else {
      // res.status(httpResponse.statusCode).json(httpResponse.body);

      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 30);
      // console.log(httpResponse.body)
      res.cookie('TokenCookie', httpResponse.body.authenticationToken, { expires: expirationDate, httpOnly: false, sameSite: "none", secure: true });
      // Redirect to a URL
      res.redirect(`${process.env.CLIENT_BASE_URL}`);
    }

  } else {
    res.status(httpResponse.statusCode).json({
      error: httpResponse.body?.message,
    })
  }

}




const expressRouterAdapterFinsihSetRoleController = async (req: Request, res: Response) => {
  const token = req.query?.token as string;
  const role = req.body?.role as UserRole;

  // console.log("ROLE", role)
  // console.log("from multiAdapterCOntroller token: ", req.query)
  const getGoogleUser = makeGetGoogleUserByEmail();
  const user = await getGoogleUser.execute(token);

  if (user instanceof UserNotFoundError) {
    // console.log("from multiAdapterCOntroller: ", user);
    return res.status(400).send('error');
  }

  const signin = makeSignIn();

  if (role === UserRole.OWNER) {
    const signUp = makeSignUpOwner();
    await signUp.execute({ role, email: user.email, password: "", image: user.picture, name: user.name } as SignUpOwnerInterface.Request);
  } else if (role === UserRole.NORMAL) {
    const signUp = makeSignUpNormalUser();
    await signUp.execute({ role, email: user.email, password: "", profileImage: user.picture, username: user.name } as SignUpNormalUserInterface.Request);
  }

  const authToken = await signin.execute({ email: user.email, password: "" });
  // res.status(200).send({ authenticationToken: authToken });
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 30);
  // console.log(httpResponse.body)
  res.cookie('TokenCookie', authToken, { expires: expirationDate, httpOnly: false, sameSite: "strict", secure: true });
  // Redirect to a URL
  res.redirect(`${process.env.CLIENT_BASE_URL}/home`);
}
