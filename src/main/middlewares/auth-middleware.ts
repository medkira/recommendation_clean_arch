import { expressMiddlewareAdaptor } from "@main/adpaters/express-middleware-adapter";
import { makeAuthMiddleware } from "@main/factories/middlewares/auth-middleware-factory";


export const authMiddleware = expressMiddlewareAdaptor(makeAuthMiddleware());