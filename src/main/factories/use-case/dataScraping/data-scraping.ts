import { DataScrapingByUrlInterface } from "@application/interfaces/use-cases/dataScraping/DataScrapingByUrlInterface";
import { DataScrapingByUrl } from "@application/use-cases/dataScraping/DataScrapingByUrl";
import { PlaceRepository } from "@infra/db/mongodb/repositories/PlaceRepository";
import { DataScrapingAdapter } from "@infra/utils/data-scraping/DataScrapingAdapter";

export const makeDataScraping = (): DataScrapingByUrlInterface => {
    const datasrapingAi = new DataScrapingAdapter();
    const placeRepository = new PlaceRepository()
    return new DataScrapingByUrl(datasrapingAi, placeRepository);

}