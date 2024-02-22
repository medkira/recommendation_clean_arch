import { expressRouterAdapter } from "@main/adpaters/express-router-adapter";
import { makeSignInController } from "@main/factories/controllers/authentication/sign-in/controller-factory";
import { makeSignUpController } from "@main/factories/controllers/authentication/sign-up/controller-factory";
import { Router } from "express";

export default (router: Router): void => {
    router.post('/register', expressRouterAdapter(makeSignUpController()));
    router.post('/login', expressRouterAdapter(makeSignInController()));

}