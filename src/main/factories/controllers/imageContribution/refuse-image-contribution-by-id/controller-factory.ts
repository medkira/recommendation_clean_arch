import { BaseController } from "@infra/http/controllers/BaseController";
import { RefuseImageContributionByIdController } from "@infra/http/controllers/imageContribution/RefuseImageContributionByIdController";
import { makeRefuseImageContributionById } from "@main/factories/use-case/imageContribution/refuse-image-contribution-by-id-factory";

export const makeRefuseImageContributionByIdController = (): BaseController => {
    const refuseImageContributionById = makeRefuseImageContributionById();

    return new RefuseImageContributionByIdController(refuseImageContributionById);
}