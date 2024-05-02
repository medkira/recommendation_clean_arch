import { CreateRateRepository } from "@application/interfaces/repositories/rates/CreateRateRepository";
import { CreateRateInterface } from "@application/interfaces/use-cases/rates/CreateRateInterface";
import { UploadImage } from "@application/interfaces/utils/upload/UploadImage";
import { File } from "@domain/entities/File";

export class CreateRate implements CreateRateInterface {
    constructor(
        private readonly createRateRepository: CreateRateRepository,

    ) { }

    async execute(RateData: CreateRateInterface.Request): Promise<string> {
        const { rate, rated_id, review, rated_name, user_id, user_name } = RateData;
        return this.createRateRepository.createRate({
            rate,
            rated_id,
            review,
            rated_name,
            user_id,
            user_name
        });
    }
}
