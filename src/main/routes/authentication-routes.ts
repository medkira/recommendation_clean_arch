import { badRequest } from "@infra/http/helpers/https";
import { expressRouterAdapter } from "@main/adpaters/express-router-adapter";
import { multerMiddlewareAdapter } from "@main/adpaters/multer-middleware-adapter";
import { makeSignInController } from "@main/factories/controllers/authentication/sign-in/controller-factory";
import { makeSignUpController } from "@main/factories/controllers/authentication/sign-up/controller-factory";
import { makeSignUpValidation } from "@main/factories/controllers/authentication/sign-up/validation-factory";
import { makeProfileImageMulterMiddleware } from "@main/factories/middlewares/profileImage-multer-middleware-factory";
import { multerMiddleware } from "@main/middlewares/multer-middleware";
import { NextFunction, Router } from "express";


// const test = multerMiddleware([
//     {
//         name: 'profileImage',
//         maxCount: 2
//     },
// ]);





export default (router: Router): void => {
    // router.post('/register', upload.single('image'), expressRouterAdapter(makeSignUpController()));
    router.post('/register', multerMiddlewareAdapter(makeProfileImageMulterMiddleware()), expressRouterAdapter(makeSignUpController()));

    router.post('/login', expressRouterAdapter(makeSignInController()));

}