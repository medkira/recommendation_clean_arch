import { expressMiddlewareAdaptor } from "@main/adpaters/express-middleware-adapter";
import { expressRouterAdapter } from "@main/adpaters/express-router-adapter";
import { makeCreateRateController } from "@main/factories/controllers/rate/create-rate/controller-factory";
import { authMiddleware } from "@main/middlewares/auth-middleware";
import { Router } from "express";

export default (router: Router): void => {
    router.post("/rates", authMiddleware, expressRouterAdapter(makeCreateRateController()));


}