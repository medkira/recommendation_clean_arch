import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";
import { HttpResponse } from "@infra/http/interfaces/http/HttpResponse";
import { BaseController } from "../BaseController";
import { forbidden, ok } from "@infra/http/helpers/https";
import { ForbiddenError } from "@application/errors/ForbiddenError";
import { AuthenticateInterface } from "@application/interfaces/use-cases/authentication/AuthenticateInterface";
import { VerifyTotpInterface } from "@application/interfaces/use-cases/totp/VerifyTotpInterface";
import { SendEmailResetPasswordInterface } from "@application/interfaces/use-cases/resetpassword/SendEmailResetPasswordInterface";

export class renderResetPasswordFormController extends BaseController {

    constructor(
        private readonly authenticate: AuthenticateInterface,
        private readonly verifyTotp: VerifyTotpInterface,
    ) {
        super();
    }


    async execute(httpRequest: renderResetPasswordFormController.Request): Promise<renderResetPasswordFormController.Response> {

        const { token } = httpRequest.query!;

        const payloadOrError = await this.authenticate.execute(token);
        if (payloadOrError instanceof ForbiddenError) {
            return forbidden(payloadOrError);
        }



        const otpOrError = await this.verifyTotp.execute(payloadOrError as { code: string, userId: string });
        if (otpOrError instanceof ForbiddenError) {
            return ok({ view: 'reset-password-form/resetpassformLinkExpiredView' });
        }



        return ok({ view: 'reset-password-form/resetpassformView', token });
    }

}



export namespace renderResetPasswordFormController {
    export type Request = HttpRequest<undefined, undefined, { token: string }>;
    export type Response = HttpResponse<SendEmailResetPasswordInterface.Response>;
}