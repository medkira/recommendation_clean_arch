import { GetLatestImageContributionInterface } from "@application/interfaces/use-cases/imageContribution/GetLatestImageContributionInterface";
import { GetLatestImageContribution } from "@application/use-cases/imageContribution/GetLatestImageContributions";
import { ImageContributionRepository } from "@infra/db/mongodb/repositories/ImageContributionRepository";

export const makeGetLatestImageContribution = (): GetLatestImageContributionInterface => {
    const imageContributionRepisitory = new ImageContributionRepository()
    return new GetLatestImageContribution(imageContributionRepisitory);
}