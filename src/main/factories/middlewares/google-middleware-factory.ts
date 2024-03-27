import { passportMiddlewareAdapter } from "@main/adpaters/passport-middleware-adapter";

export const googleAuthMiddleware = passportMiddlewareAdapter('google');
