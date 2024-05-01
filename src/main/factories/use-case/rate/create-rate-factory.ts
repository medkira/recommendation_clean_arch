import { CreateRateInterface } from "@application/interfaces/use-cases/rates/CreateRateInterface";
import { CreateRate } from "@application/use-cases/rate/CreateRate";
import { RateRepository } from "@infra/db/mongodb/repositories/RateRepository";


export const makeCreateRate = (): CreateRateInterface => {
    const rateRepository = new RateRepository();

    return new CreateRate(rateRepository);
}