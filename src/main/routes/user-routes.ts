import { expressRouterAdapter } from "@main/adpaters/express-router-adapter";
import { multerMiddlewareAdapter } from "@main/adpaters/multer-middleware-adapter";
import { makeDeleteCommentController } from "@main/factories/controllers/comment/delete-comment.ts/controller-factory";
import { makeDeleteUserController } from "@main/factories/controllers/user/delete-user/controller-factory";
import { makeGetUserByIdController } from "@main/factories/controllers/user/get-user-by-id/controller-facotry";
import { makeGetUsersController } from "@main/factories/controllers/user/get-users/controller-factory";
import { makeUpdateUserInformationController } from "@main/factories/controllers/user/update-user-information/controller-factory";
import { makeProfileImageMulterMiddleware } from "@main/factories/middlewares/profileImage-multer-middleware-factory";
import { authMiddleware } from "@main/middlewares/auth-middleware";
import { Router } from "express";

export default (router: Router): void => {
    router.get("/user", authMiddleware, expressRouterAdapter(makeGetUserByIdController()));
    router.patch("/user", multerMiddlewareAdapter(makeProfileImageMulterMiddleware()), authMiddleware, expressRouterAdapter(makeUpdateUserInformationController()))
    router.get("/user/page", authMiddleware, expressRouterAdapter(makeGetUsersController()));
    router.delete("/user/:id", authMiddleware, expressRouterAdapter(makeDeleteUserController()));
}