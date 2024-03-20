import { BaseController } from "@infra/http/controllers/BaseController";
import { renderSetNewPasswordController } from "@infra/http/controllers/resetpassword/renderSetNewPasswordController";
import { makeAuthenticate } from "@main/factories/use-case/authentication/authenticate-factory";
import { makeResetUserPassword } from "@main/factories/use-case/resetpassword/reset-user-password-factory";
import { makeDelteTotpByUserId } from "@main/factories/use-case/totp/delete-totp-by-user-id-factory";
import { makeVerifyTotp } from "@main/factories/use-case/totp/verify-totp-factory";

export const makeRenderSetNewPasswordController = (): BaseController => {
    const authenticate = makeAuthenticate();
    const verifyOtpResetPassword = makeVerifyTotp();
    const deleteTotpByUserId = makeDelteTotpByUserId();
    const resetUserPassword = makeResetUserPassword();
    return new renderSetNewPasswordController(authenticate, verifyOtpResetPassword, deleteTotpByUserId, resetUserPassword);
}