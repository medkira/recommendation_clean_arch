import { expressRouterAdapter } from "@main/adpaters/express-router-adapter";
import { multerMiddlewareAdapter } from "@main/adpaters/multer-middleware-adapter";
import { makeCreateImageContributionController } from "@main/factories/controllers/imageContribution/create-image-contribution/controller-factory";
import { makeGetLatestImageContributionController } from "@main/factories/controllers/imageContribution/get-latest-image-contributions/controller-factory";
import { makeRefuseImageContributionByIdController } from "@main/factories/controllers/imageContribution/refuse-image-contribution-by-id/controller-factory";
import { makeValidateImageContributionByIdController } from "@main/factories/controllers/imageContribution/validate-image-contribution-by-id/controller-factory";
import { makePostImageMulterMiddleware } from "@main/factories/middlewares/postImage-multer-middleware-factory copy";
import { authMiddleware } from "@main/middlewares/auth-middleware";
import { Router } from "express";

export default (router: Router): void => {
    router.post("/imageContribution",
        authMiddleware,
        multerMiddlewareAdapter(makePostImageMulterMiddleware()),
        expressRouterAdapter(makeCreateImageContributionController())
    );

    router.get("/imageContribution/page", expressRouterAdapter(makeGetLatestImageContributionController()));

    router.post("/imageContribution/validate/:id", authMiddleware, expressRouterAdapter(makeValidateImageContributionByIdController()));

    router.delete("/imageContribution/refuse/:id", authMiddleware, expressRouterAdapter(makeRefuseImageContributionByIdController()));
}