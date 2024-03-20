import { ForbiddenError } from "@application/errors/ForbiddenError";
import { UseCase } from "../UseCase";

export interface VerifyTotpInterface extends UseCase<VerifyTotpInterface.Request, VerifyTotpInterface.Response> {
    execute(payload: VerifyTotpInterface.Request): Promise<VerifyTotpInterface.Response>;
}


export namespace VerifyTotpInterface {
    export type Request = { code: string, userId: string };
    export type Response = boolean | ForbiddenError;
}