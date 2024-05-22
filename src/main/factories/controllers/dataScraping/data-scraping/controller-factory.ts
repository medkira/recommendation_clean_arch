import { BaseController } from "@infra/http/controllers/BaseController";
import { DataScrapingController } from "@infra/http/controllers/dataScraping/DataScrapingController";
import { makeDataScraping } from "@main/factories/use-case/dataScraping/data-scraping";

export const makeDataScrapingController = (): BaseController => {
    const getDataScraping = makeDataScraping();

    return new DataScrapingController(getDataScraping);
}