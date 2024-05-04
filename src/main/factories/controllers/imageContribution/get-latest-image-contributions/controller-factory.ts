
import { BaseController } from "@infra/http/controllers/BaseController";
import { GetLatestImageContributionController } from "@infra/http/controllers/imageContribution/GetLatestImageContributionController";
import { makeGetLatestImageContribution } from "@main/factories/use-case/imageContribution/get-latest-image-contribution-factory";

export const makeGetLatestImageContributionController = (): BaseController => {
    const getLatestImageContributions = makeGetLatestImageContribution();

    return new GetLatestImageContributionController(getLatestImageContributions,);
};
