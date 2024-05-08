import { expressRouterAdapter } from "@main/adpaters/express-router-adapter";
import { makeDeleteCommentController } from "@main/factories/controllers/comment/delete-comment.ts/controller-factory";
import { makeDeleteUserController } from "@main/factories/controllers/user/delete-user/controller-factory";
import { makeGetUsersController } from "@main/factories/controllers/user/get-users/controller-factory";
import { authMiddleware } from "@main/middlewares/auth-middleware";
import { Router } from "express";

export default (router: Router): void => {
    router.get("/user/page", authMiddleware, expressRouterAdapter(makeGetUsersController()));
    router.delete("/user/:id", authMiddleware, expressRouterAdapter(makeDeleteUserController()));
}