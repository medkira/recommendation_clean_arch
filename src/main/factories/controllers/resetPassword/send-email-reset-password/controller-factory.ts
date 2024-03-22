import { BaseController } from "@infra/http/controllers/BaseController";
import { SendEmailResetPasswordController } from "@infra/http/controllers/resetpassword/sendEmailResetPasswordController";
import { makeSendEmailResetPassword } from "@main/factories/use-case/resetpassword/send-email-reset-password-factory";

export const makeSendEmailResetPasswordController = (): BaseController => {

    const sendEmailResetPassword = makeSendEmailResetPassword();

    return new SendEmailResetPasswordController(sendEmailResetPassword);
}