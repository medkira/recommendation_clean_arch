import { BaseController } from "@infra/http/controllers/BaseController";
import { SignInGoogleUserController } from "@infra/http/controllers/googleUser/SignInGoogleUserController";
import { makeSignIn } from "@main/factories/use-case/authentication/sign-in-factory";
import { makeCreateGoogleUser } from "@main/factories/use-case/googleAuth/create-google-user-auth";
import { makeGetGoogleUserByEmail } from "@main/factories/use-case/googleAuth/get-google-user-auth";

export const makeSignInGoogleAuthController = (): BaseController => {
  const createGoogleUserUseCase = makeCreateGoogleUser();
  const getGoogleUserByEmail = makeGetGoogleUserByEmail();
  const signIn = makeSignIn();

  return new SignInGoogleUserController(
    createGoogleUserUseCase,
    getGoogleUserByEmail,
    signIn
  );
};
