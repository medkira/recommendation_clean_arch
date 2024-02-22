import { UnauthorizedError } from "@application/errors/UnautorizedError";
import { UseCase } from "../UseCase";
import { UserProps } from "@domain/entities/User";


export interface SignInInterface extends UseCase<SignInInterface.Request, SignInInterface.Response> {
    execute(credentials: SignInInterface.Request): Promise<SignInInterface.Response>;
}

export namespace SignInInterface {
    export type Request = Pick<UserProps, 'email' | 'password'>  // { email: string, password: string };
    export type Response = string | UnauthorizedError;
}