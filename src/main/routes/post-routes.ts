import { expressRouterAdapter } from "@main/adpaters/express-router-adapter";
import { multerMiddlewareAdapter } from "@main/adpaters/multer-middleware-adapter";
import { makeCreatePostController } from "@main/factories/controllers/post/create-post/controller-factory";
import { makeDeletePostController } from "@main/factories/controllers/post/delete-post/controller-factory";
import { makeGetLatestPostsController } from "@main/factories/controllers/post/get-latest-posts/controller-factory";
import { makeGetPostByIdController } from "@main/factories/controllers/post/get-post-by-id/controller-factory";
import { makeGetTopPostsController } from "@main/factories/controllers/post/get-top-post/controller-factory";
import { makeUpdatePostController } from "@main/factories/controllers/post/update-post/controller-factory";
import { makePostImageMulterMiddleware } from "@main/factories/middlewares/postImage-multer-middleware-factory copy";
import { authMiddleware } from "@main/middlewares/auth-middleware";
import { Router } from "express";

export default (router: Router): void => {
  router.post(
    "/posts",
    authMiddleware,
    multerMiddlewareAdapter(makePostImageMulterMiddleware()),
    expressRouterAdapter(makeCreatePostController())
  );
  router.get("/posts/:id", expressRouterAdapter(makeGetPostByIdController()));
  router.get("/topPosts", expressRouterAdapter(makeGetTopPostsController()));

  router.get(
    "/post/page",
    expressRouterAdapter(makeGetLatestPostsController())
  );

  router.patch(
    "/posts/:id",
    authMiddleware,
    multerMiddlewareAdapter(makePostImageMulterMiddleware()),
    expressRouterAdapter(makeUpdatePostController())
  );
  router.delete(
    "/posts/:id",
    authMiddleware,
    expressRouterAdapter(makeDeletePostController())
  );
};
