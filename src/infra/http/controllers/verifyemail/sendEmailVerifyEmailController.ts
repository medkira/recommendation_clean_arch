import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";
import { HttpResponse } from "@infra/http/interfaces/http/HttpResponse";
import { BaseController } from "../BaseController";
import { EmailNotFoundError } from "@application/errors/EmailNotFundError";
import { notFound, ok } from "@infra/http/helpers/https";
import { Validation } from "@infra/http/interfaces/validation/validations";
import { SendEmailVerifyEmailInterface } from "@application/interfaces/use-cases/verifyEmail/SendEmailVerifyEmailInterface";

export class SendEmailVerifyEmailController extends BaseController {

    constructor(
        // private readonly sendEmailVerifyEmailValidation: Validation,
        private readonly sendEmailVerifyEmail: SendEmailVerifyEmailInterface
    ) {
        super()
    }


    async execute(httpRequest: SendEmailVerifyEmailController.Request): Promise<SendEmailVerifyEmailController.Response> {
        const { email } = httpRequest.body!;
        const sentOrError = await this.sendEmailVerifyEmail.execute({ email, reqHost: httpRequest.host, reqProtocole: httpRequest.protocole });
        if (sentOrError instanceof EmailNotFoundError) {
            return notFound(sentOrError);
        }



        return ok({
            message: sentOrError
        });
    }

}



export namespace SendEmailVerifyEmailController {
    export type Request = HttpRequest<{ email: string }>;
    export type Response = HttpResponse<SendEmailVerifyEmailInterface.Response>;
}