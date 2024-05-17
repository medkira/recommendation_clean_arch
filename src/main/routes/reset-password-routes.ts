import { expressRouterAdapter } from "@main/adpaters/express-router-adapter";
import { pageRedirectAdapter } from "@main/adpaters/page-redirect-adapter";
import { pageRenderAdapter } from "@main/adpaters/page-render-adapter";
import { makeRenderResetPasswordFormController } from "@main/factories/controllers/resetPassword/render-reset-password-form/controller-factory";
import { makeRenderSetNewPasswordController } from "@main/factories/controllers/resetPassword/render-set-new-password/controller-factory";
import { makeSendEmailResetPasswordController } from "@main/factories/controllers/resetPassword/send-email-reset-password/controller-factory";
import { Router } from "express";


export default (router: Router): void => {

    router.post('/resetPassword', expressRouterAdapter(makeSendEmailResetPasswordController()));

    router.get('/password-reset-link', pageRenderAdapter(makeRenderResetPasswordFormController()));

    router.post('/newPassword', pageRedirectAdapter(makeRenderSetNewPasswordController()));
}


