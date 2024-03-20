import { BaseController } from "@infra/http/controllers/BaseController";
import { renderResetPasswordFormController } from "@infra/http/controllers/resetpassword/renderResetPasswordFormController";
import { makeAuthenticate } from "@main/factories/use-case/authentication/authenticate-factory";
import { makeVerifyTotp } from "@main/factories/use-case/totp/verify-totp-factory";

export const makeRenderResetPasswordFormController = (): BaseController => {
    const authenticate = makeAuthenticate();
    const verifyOtpResetPassword = makeVerifyTotp();
    return new renderResetPasswordFormController(authenticate, verifyOtpResetPassword);
}

