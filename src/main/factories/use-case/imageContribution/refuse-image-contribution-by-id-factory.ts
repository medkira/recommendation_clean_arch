import { RefuseImageContributionByIdInterface } from "@application/interfaces/use-cases/imageContribution/RefuseImageContributionByIdInterface";
import { RefuseImageContributionById } from "@application/use-cases/imageContribution/RefuseImageContributionById";
import { ImageContributionRepository } from "@infra/db/mongodb/repositories/ImageContributionRepository";

export const makeRefuseImageContributionById = (): RefuseImageContributionByIdInterface => {
    const imageContributionRepository = new ImageContributionRepository();
    return new RefuseImageContributionById(imageContributionRepository, imageContributionRepository);
}