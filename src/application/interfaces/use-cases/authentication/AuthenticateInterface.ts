import { DecodedToken, DecodedTokenProps } from "@domain/entities/TokenPayload.js";
import { UseCase } from "../UseCase.js";
import { ForbiddenError } from "@application/errors/ForbiddenError.js";


export interface AuthenticateInterface extends UseCase<AuthenticateInterface.Request, AuthenticateInterface.Response> {
    execute(authenticationToken: AuthenticateInterface.Request): Promise<AuthenticateInterface.Response>;
}


export namespace AuthenticateInterface {
    export type Request = string;
    export type Response = Pick<DecodedToken, 'payload'> | ForbiddenError;
}