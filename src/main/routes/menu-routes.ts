import { expressRouterAdapter } from "@main/adpaters/express-router-adapter";
import { makeCreateMenuController } from "@main/factories/controllers/menu/create-menu/controller-factory";
import { authMiddleware } from "@main/middlewares/auth-middleware";
import { Router } from "express";



export default (router: Router): void => {
    router.post(
      "/menu",
      authMiddleware,
      expressRouterAdapter(makeCreateMenuController())
    );
  
  };