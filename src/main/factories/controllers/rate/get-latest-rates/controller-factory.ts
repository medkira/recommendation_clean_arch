import { BaseController } from "@infra/http/controllers/BaseController";
import { GetLatestRatesController } from "@infra/http/controllers/rate/GetLatestRatesController";
import { makeGetLatestRates } from "@main/factories/use-case/rate/get-latest-rates-factory";

export const makeGetLatestRatesController = (): BaseController => {
    const getLatestRates = makeGetLatestRates();

    return new GetLatestRatesController(getLatestRates);
}