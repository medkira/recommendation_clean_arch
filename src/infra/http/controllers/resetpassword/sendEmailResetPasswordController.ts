import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";
import { HttpResponse } from "@infra/http/interfaces/http/HttpResponse";
import { BaseController } from "../BaseController";
import { EmailNotFoundError } from "@application/errors/EmailNotFundError";
import { notFound, ok } from "@infra/http/helpers/https";
import { SendEmailResetPasswordInterface } from "@application/interfaces/use-cases/resetpassword/SendEmailResetPasswordInterface";

export class SendEmailResetPasswordController extends BaseController {

    constructor(
        private readonly sendEmailResetPassword: SendEmailResetPasswordInterface
    ) {
        super()
    }


    async execute(httpRequest: SendEmailResetPasswordController.Request): Promise<SendEmailResetPasswordController.Response> {
        const { email } = httpRequest.body!;
        const sentOrError = await this.sendEmailResetPassword.execute({ email, reqHost: httpRequest.host, reqProtocole: httpRequest.protocole });
        if (sentOrError instanceof EmailNotFoundError) {
            return notFound(sentOrError);
        }



        return ok({
            message: sentOrError
        });
    }

}



export namespace SendEmailResetPasswordController {
    export type Request = HttpRequest<{ email: string }>;
    export type Response = HttpResponse<SendEmailResetPasswordInterface.Response>;
}