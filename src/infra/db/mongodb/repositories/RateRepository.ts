import { CreateRateRepository } from "@application/interfaces/repositories/rates/CreateRateRepository";
import RateModel from "../models/rate.model";
import { objectIdToString } from "../helpers/mappers";

export class RateRepository implements CreateRateRepository {
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