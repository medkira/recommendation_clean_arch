import { ForbiddenError } from "@application/errors/ForbiddenError";
import { UseCase } from "../UseCase";
import { UnauthorizedError } from "@application/errors/UnautorizedError";

export interface DeleteTotpByUserIdInterface extends UseCase<DeleteTotpByUserIdInterface.Request, DeleteTotpByUserIdInterface.Response> {
    execute(id: DeleteTotpByUserIdInterface.Request): Promise<DeleteTotpByUserIdInterface.Response>;
}


export namespace DeleteTotpByUserIdInterface {
    export type Request = string;
    export type Response = void | UnauthorizedError;
}