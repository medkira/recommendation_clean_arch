import { expressRouterAdapter } from "@main/adpaters/express-router-adapter";
import { makeShareController } from "@main/factories/controllers/normalUser/share-food/controller-factory";
import { Router } from "express";

export default (router: Router): void => {
  router.post("/shareFood/:id", expressRouterAdapter(makeShareController()));
};
