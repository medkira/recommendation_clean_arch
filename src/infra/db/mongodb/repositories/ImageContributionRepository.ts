import { CreateImageContributionRepository } from "@application/interfaces/repositories/imageContribution/CreateImageContributionRepository";
import ImageContributionModel from "../models/imageContribution.model";
import { mapCollection, objectIdToString } from "../helpers/mappers";
import { GetLatestImageContributionRepository } from "@application/interfaces/repositories/imageContribution/GetLatestImageContributionRepository";
import { paginateModel } from "../helpers/utils/pagination-util";

export class ImageContributionRepository implements CreateImageContributionRepository, GetLatestImageContributionRepository {


    async getLatestImageContribution(params: GetLatestImageContributionRepository.Request): Promise<GetLatestImageContributionRepository.Response> {
        const { paginationLimit, query, page } = params;
        const rawLatestImageContribution = await paginateModel(ImageContributionModel, page, paginationLimit, query);
        const transformedData = mapCollection(rawLatestImageContribution.data);
        return {
            data: transformedData,
            page: rawLatestImageContribution.page,
            total: rawLatestImageContribution.total,
            totalPages: rawLatestImageContribution.totalPages
        };
    }


    async createImageContribution(imageContributionData: CreateImageContributionRepository.Request): Promise<string> {
        const imageContribution = new ImageContributionModel(
            {
                ...imageContributionData,
                // userId: imageContributionData.user_id,
                // placeId: imageContributionData.place_id,
                createdAt: new Date(),
            });
        const savedImageContribution = await imageContribution.save();

        const imageContributionId = objectIdToString(savedImageContribution._id);
        return imageContributionId;

    }

}