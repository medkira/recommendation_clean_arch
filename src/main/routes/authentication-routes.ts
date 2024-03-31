import { expressRouterAdapter } from "@main/adpaters/express-router-adapter";
import { multerMiddlewareAdapter } from "@main/adpaters/multer-middleware-adapter";
import { makeSignInController } from "@main/factories/controllers/authentication/sign-in/controller-factory";
import { makeSignUpController } from "@main/factories/controllers/authentication/sign-up/controller-factory";
import { makeProfileImageMulterMiddleware } from "@main/factories/middlewares/profileImage-multer-middleware-factory";
import { rateLimitMiddleware } from "@main/middlewares/express-rate-limiting-middleware";
import { Router } from "express";



export default (router: Router): void => {
    // router.post('/register', upload.single('image'), expressRouterAdapter(makeSignUpController()));
    router.post('/register', multerMiddlewareAdapter(makeProfileImageMulterMiddleware()), expressRouterAdapter(makeSignUpController()));

    router.post('/login', rateLimitMiddleware, expressRouterAdapter(makeSignInController()));

}