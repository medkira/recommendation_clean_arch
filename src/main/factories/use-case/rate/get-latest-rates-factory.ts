
import { GetLatesRatesInterface } from "@application/interfaces/use-cases/rates/GetLatestRatesInterface";
import { GetLatesRates } from "@application/use-cases/rate/GetLatestRates";
import { RateRepository } from "@infra/db/mongodb/repositories/RateRepository";

export const makeGetLatestRates = (): GetLatesRatesInterface => {
    const placeRepository = new RateRepository();
    return new GetLatesRates(placeRepository);
}