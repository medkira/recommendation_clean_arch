import { BaseController } from "@infra/http/controllers/BaseController";
import { RenderVerifiedEmailPageController } from "@infra/http/controllers/verifyemail/renderVerifiedEmailPageController";
import { makeAuthenticate } from "@main/factories/use-case/authentication/authenticate-factory";
import { makeVerifyTotp } from "@main/factories/use-case/totp/verify-totp-factory";
import { makeValidateUserEmail } from "@main/factories/use-case/user/validate-user-email-factory";

export const makeRenderVerifiedEmailPageController = (): BaseController => {
    const authenticate = makeAuthenticate();
    const verifyOtpVerifyEmail = makeVerifyTotp();
    const validateUserEmail = makeValidateUserEmail()
    return new RenderVerifiedEmailPageController(
        authenticate,
        verifyOtpVerifyEmail,
        validateUserEmail);
}