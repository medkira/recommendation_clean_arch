import { ValidateImageContributionByIdInterface } from "@application/interfaces/use-cases/imageContribution/ValidateImageContributionByIdInterface";
import { ValidateImageContributionById } from "@application/use-cases/imageContribution/ValidateImageContributionById";
import { ImageContributionRepository } from "@infra/db/mongodb/repositories/ImageContributionRepository";
import { PlaceRepository } from "@infra/db/mongodb/repositories/PlaceRepository";

export const makeValidateImageContributionById = (): ValidateImageContributionByIdInterface => {
    const imageContributionRepository = new ImageContributionRepository()
    const placeRepository = new PlaceRepository();
    return new ValidateImageContributionById(imageContributionRepository, imageContributionRepository, placeRepository)
}