import { expressRouterAdapter } from "@main/adpaters/express-router-adapter";
import { multerMiddlewareAdapter } from "@main/adpaters/multer-middleware-adapter";
import { makeCreateMenuController } from "@main/factories/controllers/menu/create-menu/controller-factory";
import { makePostImageMulterMiddleware } from "@main/factories/middlewares/postImage-multer-middleware-factory copy";
import { authMiddleware } from "@main/middlewares/auth-middleware";
import { Router } from "express";



export default (router: Router): void => {
  router.post(
    "/menu",
    authMiddleware,
    multerMiddlewareAdapter(makePostImageMulterMiddleware()),
    expressRouterAdapter(makeCreateMenuController())
  );

};