import { expressRouterAdapter } from "@main/adpaters/express-router-adapter";
import { multerMiddlewareAdapter } from "@main/adpaters/multer-middleware-adapter";
import { makeCreateImageContributionController } from "@main/factories/controllers/imageContribution/create-image-contribution/controller-factory";
import { makePostImageMulterMiddleware } from "@main/factories/middlewares/postImage-multer-middleware-factory copy";
import { authMiddleware } from "@main/middlewares/auth-middleware";
import { Router } from "express";

export default (router: Router): void => {
    router.post("/imageContribution",
        authMiddleware,
        multerMiddlewareAdapter(makePostImageMulterMiddleware()),
        expressRouterAdapter(makeCreateImageContributionController())
    );
}