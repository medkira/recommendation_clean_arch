import { RateNotFoundError } from "@application/errors/RateNotFoundError";
import { GetRateByIdRepository } from "@application/interfaces/repositories/rates/GetRateByIdRepository";
import { GetRateByIdInterface } from "@application/interfaces/use-cases/rates/GetRateByIdInterface";

export class GetRateById implements GetRateByIdInterface {
    constructor(private readonly GetRateByIdRepositroy: GetRateByIdRepository) { }

    async execute(RateId: string): Promise<GetRateByIdInterface.Response> {
        const Rate = await this.GetRateByIdRepositroy.getRateById(RateId);
        if (!Rate) {
            return new RateNotFoundError();
        }
        return Rate;
    }
}
