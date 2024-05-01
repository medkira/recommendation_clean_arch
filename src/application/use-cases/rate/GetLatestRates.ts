import { GetLatestRatesRepository } from "@application/interfaces/repositories/rates/GetLatestRatesRepository";
import { GetLatesRatesInterface } from "@application/interfaces/use-cases/rates/GetLatestRatesInterface";

export class GetLatesRates implements GetLatesRatesInterface {
    constructor(
        private readonly getLatesrRatesRepository: GetLatestRatesRepository
    ) { }
    async execute(
        params: GetLatesRatesInterface.Request
    ): Promise<GetLatesRatesInterface.Response> {
        const { page = 1, rated_id } = params;
        const paginationLimit = 5;

        return this.getLatesrRatesRepository.getLatestRates({
            page,
            paginationLimit,
            query: {
                ...(rated_id && { rated_id }),
            },
        });
    }
}
