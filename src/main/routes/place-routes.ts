import { expressRouterAdapter } from "@main/adpaters/express-router-adapter";
import { makeCreatePlaceController } from "@main/factories/controllers/place/create-place/controller-factory";
import { makeDeletePlaceController } from "@main/factories/controllers/place/delete-place/controller-factory";
import { makeGetPlaceByIdController } from "@main/factories/controllers/place/get-place-by-id/controller-factory";
import { makeGetPlaceByTypeController } from "@main/factories/controllers/place/get-place-by-type/controller-factory";
import { makeUpdatePlaceController } from "@main/factories/controllers/place/update-place/controller-factory";
import { Router } from "express";

export default (router: Router): void => {
  router.get(
    "/placeById/:id",
    expressRouterAdapter(makeGetPlaceByIdController())
  );

  router.post("/place", expressRouterAdapter(makeCreatePlaceController()));
  router.patch("/place/:id", expressRouterAdapter(makeUpdatePlaceController()));
  router.delete(
    "/place/:id",
    expressRouterAdapter(makeDeletePlaceController())
  );
  router.get(
    "/placeByType/:type",
    expressRouterAdapter(makeGetPlaceByTypeController())
  );
};
