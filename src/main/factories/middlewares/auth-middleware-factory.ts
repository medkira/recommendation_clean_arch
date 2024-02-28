import { BaseMiddleware } from "@infra/http/middlewares/BaseMiddlewares";
import { AuthMiddleware } from "@infra/http/middlewares/authentication/AuthMiddleware";
import { makeAuthenticate } from "../use-case/authentication/authenticate-factory";

export const makeAuthMiddleware = (): BaseMiddleware => {
    const authenticateUseCase = makeAuthenticate();

    return new AuthMiddleware(authenticateUseCase);
}