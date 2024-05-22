import { CreatePlaceRepository } from "@application/interfaces/repositories/place/CreatePlaceRepository";
import { DataScrapingByUrlInterface } from "@application/interfaces/use-cases/dataScraping/DataScrapingByUrlInterface";
import { DataScrapingAdapter } from "@infra/utils/data-scraping/DataScrapingAdapter";

export class DataScrapingByUrl implements DataScrapingByUrlInterface {
    constructor(
        private readonly aiScrapeData: DataScrapingAdapter,
        private readonly createPlaceRepository: CreatePlaceRepository,
    ) { }


    async execute(parmas: DataScrapingByUrlInterface.Request): Promise<DataScrapingByUrlInterface.Response> {
        const { url, placeType } = parmas;
        const savedDatas = []
        const data = await this.aiScrapeData.DataScraping({ placeType, url });
        for (const place of data) {
            const {
                description = "",
                id,
                is_verified,
                location,
                name,
                type,
                url = "",
                user_id = "0000",
                placeImage = [""]
            } = place;
            const savedData = await this.createPlaceRepository.createPlace({
                description,
                is_verified,
                location,
                name,
                type,
                url,
                user_id,
                placeImage
            });
            savedDatas.push(savedData);
        }


        return data;
    }
}