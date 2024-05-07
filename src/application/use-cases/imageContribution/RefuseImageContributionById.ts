import { ImageContributionNotFoundError } from "@application/errors/ImageContributionNotFoundError";
import { GetImageContributionByIdRepository } from "@application/interfaces/repositories/imageContribution/GetImageContributionByIdRepository";
import { RefuseImageContributionByIdRepository } from "@application/interfaces/repositories/imageContribution/RefuseImageContributionByIdRepository";

import { RefuseImageContributionByIdInterface } from "@application/interfaces/use-cases/imageContribution/RefuseImageContributionByIdInterface";

export class RefuseImageContributionById implements RefuseImageContributionByIdInterface {
    constructor(
        private readonly getImageContributionById: GetImageContributionByIdRepository,
        private readonly refuseImageContributionByIdRepository: RefuseImageContributionByIdRepository,


    ) { }

    async execute(imageContributionId: string): Promise<RefuseImageContributionByIdInterface.Response> {
        // console.log(imageContributionId)
        const imageContribution = await this.getImageContributionById.GetImageContributionById(imageContributionId);
        // console.log(imageContribution)
        if (!imageContribution) {
            return new ImageContributionNotFoundError();
        }

        await this.refuseImageContributionByIdRepository.RefuseImageContribution(imageContributionId);

    }
}