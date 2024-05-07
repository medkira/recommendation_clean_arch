import { CreateImageContributionRepository } from "@application/interfaces/repositories/imageContribution/CreateImageContributionRepository";
import ImageContributionModel from "../models/imageContribution.model";
import { mapCollection, mapDocument, objectIdToString, stringToObjectId } from "../helpers/mappers";
import { GetLatestImageContributionRepository } from "@application/interfaces/repositories/imageContribution/GetLatestImageContributionRepository";
import { paginateModel } from "../helpers/utils/pagination-util";
import { GetImageContributionByIdRepository } from "@application/interfaces/repositories/imageContribution/GetImageContributionByIdRepository";
import { isValidObjectId } from "mongoose";
import { ValidateAddImageContributionRepository } from "@application/interfaces/repositories/imageContribution/ValidateAddImageContributionRepository";
import { RefuseImageContributionByIdRepository } from "@application/interfaces/repositories/imageContribution/RefuseImageContributionByIdRepository";

export class ImageContributionRepository implements CreateImageContributionRepository,
    GetLatestImageContributionRepository, GetImageContributionByIdRepository,
    ValidateAddImageContributionRepository, RefuseImageContributionByIdRepository {

    async RefuseImageContribution(id: string): Promise<void> {
        await ImageContributionModel.findByIdAndDelete(id);
    }


    async validateAddImageContribution(id: string): Promise<void> {
        await ImageContributionModel.findByIdAndUpdate(
            stringToObjectId(id),
            { is_verified: true }
        )
    }

    async GetImageContributionById(contributionById: string): Promise<GetImageContributionByIdRepository.Response> {
        if (!isValidObjectId(contributionById)) {
            return null;
        }
        // console.log(contributionById)
        const rawData = await ImageContributionModel.findById(contributionById);

        return rawData && mapDocument(rawData);
    }


    async getLatestImageContribution(params: GetLatestImageContributionRepository.Request): Promise<GetLatestImageContributionRepository.Response> {
        const { paginationLimit, query, page } = params;
        query.is_verified = false;
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