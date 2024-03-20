import { expressRouterAdapter } from "@main/adpaters/express-router-adapter";
import { makeCreateCommentController } from "@main/factories/controllers/comment/create-comment/controller-factory";
import { makeDeleteCommentController } from "@main/factories/controllers/comment/delete-comment.ts/controller-factory";
import { authMiddleware } from "@main/middlewares/auth-middleware";
import { Router } from "express";

export default (router: Router): void => {
  router.post(
    "/comments",
    authMiddleware,
    expressRouterAdapter(makeCreateCommentController())
  );
  router.delete(
    "/comments/:id",
    authMiddleware,
    expressRouterAdapter(makeDeleteCommentController())
  );
};
