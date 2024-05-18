import { expressRouterAdapter } from "@main/adpaters/express-router-adapter";
import { pageRenderAdapter } from "@main/adpaters/page-render-adapter";
import { makeRenderVerifiedEmailPageController } from "@main/factories/controllers/verifyEmail/render-email-verified-page/controller-factory";
import { makeSendEmailVerifyEmailController } from "@main/factories/controllers/verifyEmail/send-email-verify-email/controller-factory";
import { Router } from "express";


export default (router: Router): void => {
    router.post('/verifyEmail', expressRouterAdapter(makeSendEmailVerifyEmailController()));

    router.get('/email-verify-link', pageRenderAdapter(makeRenderVerifiedEmailPageController()));

}