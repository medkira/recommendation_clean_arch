import { passportMiddlewareAdapter } from "@main/adpaters/passport-middleware-adapter";
import { options } from "@main/middlewares/passport-middleware";

export const googleAuthMiddleware = passportMiddlewareAdapter('google',options);
