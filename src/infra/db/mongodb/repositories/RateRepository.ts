import { CreateRateRepository } from "@application/interfaces/repositories/rates/CreateRateRepository";
import RateModel from "../models/rate.model";
import { isValidObjectId, mapCollection, mapDocument, objectIdToString } from "../helpers/mappers";
import { GetRateByIdRepository } from "@application/interfaces/repositories/rates/GetRateByIdRepository";
import { GetLatestRatesRepository } from "@application/interfaces/repositories/rates/GetLatestRatesRepository";
import { paginateModel } from "../helpers/utils/pagination-util";

export class RateRepository implements CreateRateRepository, GetRateByIdRepository, GetLatestRatesRepository {



    async getLatestRates(params: GetLatestRatesRepository.Request): Promise<GetLatestRatesRepository.Response> {
        const rawLatestPlaces = await paginateModel(RateModel, params.page, params.paginationLimit, params.query);
        const transformedData = mapCollection(rawLatestPlaces.data);
        return {
            data: transformedData,
            page: rawLatestPlaces.page,
            total: rawLatestPlaces.total,
            totalPages: rawLatestPlaces.totalPages
        };
    }


    async getRateById(RateId: string): Promise<GetRateByIdRepository.Response> {
        if (!isValidObjectId(RateId)) {
            return null;
        }
        const rawplace = await RateModel.findById(RateId);
        return rawplace && mapDocument(rawplace);
    }



    async createRate(RateData: CreateRateRepository.Request): Promise<string> {
        const Rate = new RateModel({
            ...RateData,
            createdAt: new Date(),
        });

        const savedRate = await Rate.save();

        const RateId = objectIdToString(savedRate._id);

        return RateId;

    }

}