import { AuthenticateInterface } from "@application/interfaces/use-cases/authentication/AuthenticateInterface";
import { BaseMiddleware } from "../BaseMiddlewares";
import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";
import { HttpResponse } from "@infra/http/interfaces/http/HttpResponse";
import { DecodedToken, DecodedTokenProps } from "@domain/entities/TokenPayload";
import { AuthTokenNotProvidedError } from "@infra/http/errors/AuthTokenNotProvidedError";
import { InvalidAuthTokenError } from "@infra/http/errors/InvalidAuthTokenError";
import { forbidden, ok } from "@infra/http/helpers/https";
import { ForbiddenError } from "@application/errors/ForbiddenError";

export class AuthMiddleware extends BaseMiddleware {
    constructor(
        private readonly authenticate: AuthenticateInterface,
    ) {
        super();
    }

    async execute(httpRequest: AuthMiddleware.Request): Promise<AuthMiddleware.Response> {
        const authToken = httpRequest.headers?.authorization;
        if (!authToken) {
            return forbidden(new InvalidAuthTokenError());
        }

        const decodedTokenOrError = await this.authenticate.execute(authToken);
        if (decodedTokenOrError instanceof ForbiddenError) {
            return forbidden(new InvalidAuthTokenError())
        }

        return ok(decodedTokenOrError);
    }
}


export namespace AuthMiddleware {
    export type Request = HttpRequest<undefined, undefined, undefined, { authorization: string }>
    export type Response = HttpResponse<Pick<DecodedTokenProps, 'payload'> | AuthTokenNotProvidedError | InvalidAuthTokenError>
}