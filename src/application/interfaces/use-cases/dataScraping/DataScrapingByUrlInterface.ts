import { Place, placeTypes } from "@domain/entities/Place";
import { UseCase } from "../UseCase";

export interface DataScrapingByUrlInterface extends UseCase<DataScrapingByUrlInterface.Request, DataScrapingByUrlInterface.Response> {
    execute(parmas: DataScrapingByUrlInterface.Request): Promise<DataScrapingByUrlInterface.Response>
}

export namespace DataScrapingByUrlInterface {
    export type Request = { url?: string, placeType?: string }
    export type Response = Place[]
}