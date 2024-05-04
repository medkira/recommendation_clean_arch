import { ImageContributionNotFoundError } from "@application/errors/ImageContributionNotFoundError";
import { GetImageContributionByIdRepository } from "@application/interfaces/repositories/imageContribution/GetImageContributionByIdRepository";
import { ValidateAddImageContributionRepository } from "@application/interfaces/repositories/imageContribution/ValidateAddImageContributionRepository";
import { AddImageToPlaceByIdRepository } from "@application/interfaces/repositories/place/AddImageToPlaceRepository";
import { ValidateImageContributionByIdInterface } from "@application/interfaces/use-cases/imageContribution/ValidateImageContributionByIdInterface";

export class ValidateImageContributionById implements ValidateImageContributionByIdInterface {
    constructor(
        private readonly getImageContributionById: GetImageContributionByIdRepository,
        private readonly validateAddImageRepository: ValidateAddImageContributionRepository,
        private readonly addImageToPlaceByIdRepository: AddImageToPlaceByIdRepository,
    ) { }

    async execute(imageContributionId: string): Promise<ValidateImageContributionByIdInterface.Response> {
        // console.log(imageContributionId)
        const imageContribution = await this.getImageContributionById.GetImageContributionById(imageContributionId);
        // console.log(imageContribution)
        if (!imageContribution) {
            return new ImageContributionNotFoundError();
        }

        await this.addImageToPlaceByIdRepository.addImageToPlace({ imageUrl: imageContribution.image[0] as string, placeId: imageContribution.place_id! });
        await this.validateAddImageRepository.validateAddImageContribution(imageContribution.id);

    }
}