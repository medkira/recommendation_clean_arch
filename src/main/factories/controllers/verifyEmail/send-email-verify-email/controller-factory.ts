import { BaseController } from "@infra/http/controllers/BaseController";
import { SendEmailVerifyEmailController } from "@infra/http/controllers/verifyemail/sendEmailVerifyEmailController";
import { makeSendEmailVerifyEmail } from "@main/factories/use-case/verifyEmail/send-email-verify-email-factory";

export const makeSendEmailVerifyEmailController = (): BaseController => {

    const sendEmailVerifyEmail = makeSendEmailVerifyEmail();
    return new SendEmailVerifyEmailController(sendEmailVerifyEmail);
}