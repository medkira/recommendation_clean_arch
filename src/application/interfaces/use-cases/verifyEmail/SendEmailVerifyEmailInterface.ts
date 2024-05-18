import { EmailNotFoundError } from "@application/errors/EmailNotFundError";
import { UseCase } from "../UseCase";

export interface SendEmailVerifyEmailInterface extends UseCase<SendEmailVerifyEmailInterface.Request, SendEmailVerifyEmailInterface.Response> {
    execute(request: SendEmailVerifyEmailInterface.Request): Promise<SendEmailVerifyEmailInterface.Response>;
}

export namespace SendEmailVerifyEmailInterface {
    export type Request = { email: string, reqProtocole: string, reqHost: string };
    export type Response = string | EmailNotFoundError;
}