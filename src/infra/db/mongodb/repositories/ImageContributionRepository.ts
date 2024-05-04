import { CreateImageContributionRepository } from "@application/interfaces/repositories/imageContribution/CreateImageContributionRepository";
import ImageContributionModel from "../models/imageContribution.model";
import { objectIdToString } from "../helpers/mappers";

export class ImageContributionRepository implements CreateImageContributionRepository {


    async createImageContribution(imageContributionData: CreateImageContributionRepository.Request): Promise<string> {
        const imageContribution = new ImageContributionModel(
            {
                ...imageContributionData,
                createdAt: new Date(),
            });

        const savedImageContribution = await imageContribution.save();

        const imageContributionId = objectIdToString(savedImageContribution._id);

        return imageContributionId;

    }

}