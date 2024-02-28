import { AuthMiddleware } from "@infra/http/middlewares/authentication/AuthMiddleware";
import { expressMiddlewareAdaptor } from "@main/adpaters/express-middleware-adapter";
import { expressRouterAdapter } from "@main/adpaters/express-router-adapter";
import { makeCreatePlaceController } from "@main/factories/controllers/place/create-place/controller-factory";
import { makeDeletePlaceController } from "@main/factories/controllers/place/delete-place/controller-factory";
import { makeGetPlaceByIdController } from "@main/factories/controllers/place/get-place-by-id/controller-factory";
import { makeGetPlaceByTypeController } from "@main/factories/controllers/place/get-place-by-type/controller-factory";
import { makeUpdatePlaceController } from "@main/factories/controllers/place/update-place/controller-factory";
import { authMiddleware } from "@main/middlewares/auth-middleware";
import { Router } from "express";

export default (router: Router): void => {
  router.get("/place/:id", expressRouterAdapter(makeGetPlaceByIdController()));

  router.get("/place/type/:type", expressRouterAdapter(makeGetPlaceByTypeController()));

  router.post("/place", authMiddleware, expressRouterAdapter(makeCreatePlaceController()));

  router.patch("/place/:id", expressRouterAdapter(makeUpdatePlaceController()));

  router.delete("/place/:id", expressRouterAdapter(makeDeletePlaceController()));
};
