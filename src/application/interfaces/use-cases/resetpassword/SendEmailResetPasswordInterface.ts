import { EmailNotFoundError } from "@application/errors/EmailNotFundError";
import { UseCase } from "../UseCase";

export interface SendEmailResetPasswordInterface extends UseCase<SendEmailResetPasswordInterface.Request, SendEmailResetPasswordInterface.Response> {
    execute(request: SendEmailResetPasswordInterface.Request): Promise<SendEmailResetPasswordInterface.Response>;
}

export namespace SendEmailResetPasswordInterface {
    export type Request = { email: string, reqProtocole: string, reqHost: string };
    export type Response = string | EmailNotFoundError;
}