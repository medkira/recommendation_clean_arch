import { Router } from "express";
import { makeSignInGoogleAuthController } from "@main/factories/controllers/googleAuth/sign-in-google-auth";
import { expressRouterAdapter } from "@main/adpaters/express-router-adapter";
import { googleAuthMiddleware } from "@main/factories/middlewares/google-middleware-factory";




export default (router: Router): void => {
  router.get('/google',googleAuthMiddleware)
  router.get('/loginGoogle', googleAuthMiddleware, expressRouterAdapter(makeSignInGoogleAuthController()));

};


