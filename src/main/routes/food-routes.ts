import { expressRouterAdapter } from "@main/adpaters/express-router-adapter";
import { multerMiddlewareAdapter } from "@main/adpaters/multer-middleware-adapter";
import { makeCreateFoodController } from "@main/factories/controllers/food/create-food/controller-factory";
import { makeDeleteFoodController } from "@main/factories/controllers/food/delete-food/controller-factory";
import { makeGetFoodByIdController } from "@main/factories/controllers/food/get-food-by-id/controller-factory";
import { makeGetLatestFoodsController } from "@main/factories/controllers/food/get-latest-food/controller-factory";
import { makeGetPlaceByFoodIdController } from "@main/factories/controllers/food/get-place-by-food-id/controller-factory";
import { makeUpdateFoodController } from "@main/factories/controllers/food/update-food/controller-factory";
import { makePostImageMulterMiddleware } from "@main/factories/middlewares/postImage-multer-middleware-factory copy";
import { authMiddleware } from "@main/middlewares/auth-middleware";
import { Router } from "express";

export default (router: Router): void => {

  router.get("/food/page", expressRouterAdapter(makeGetLatestFoodsController()));


  router.get(
    "/food/:id",

    expressRouterAdapter(makeGetFoodByIdController())
  );
  router.post(
    "/food",
    authMiddleware, multerMiddlewareAdapter(makePostImageMulterMiddleware()),
    expressRouterAdapter(makeCreateFoodController())
  );
  router.get(
    "/placeFromFood/:id",

    expressRouterAdapter(makeGetPlaceByFoodIdController())
  );
  router.delete(
    "/food/:id",
    authMiddleware,
    expressRouterAdapter(makeDeleteFoodController())
  );
  router.patch("/food/:id", authMiddleware, multerMiddlewareAdapter(makePostImageMulterMiddleware()), expressRouterAdapter(makeUpdateFoodController()));

};
