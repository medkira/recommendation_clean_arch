import { UseCase } from "../UseCase";
import { UserNotFoundError } from "@application/errors/UserNotFoundError";

export interface ResetUserPasswordInterface extends UseCase<ResetUserPasswordInterface.Request, ResetUserPasswordInterface.Response> {
    execute(request: ResetUserPasswordInterface.Request): Promise<ResetUserPasswordInterface.Response>;
}

export namespace ResetUserPasswordInterface {
    export type Request = { id: string, password: string };
    export type Response = { id: string } | UserNotFoundError;
}