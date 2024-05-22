import { DataScrapingByUrlInterface } from "@application/interfaces/use-cases/dataScraping/DataScrapingByUrlInterface";
import { BaseController } from "../BaseController";
import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";
import { HttpResponse } from "@infra/http/interfaces/http/HttpResponse";
import { ok } from "@infra/http/helpers/https";

export class DataScrapingController extends BaseController {

    constructor(
        private readonly srapeData: DataScrapingByUrlInterface
    ) {
        super();
    }

    async execute(httpRequest: DataScrapingController.Request): Promise<DataScrapingController.Response> {

        const { placeType, url } = httpRequest.body!;

        const data = await this.srapeData.execute({ placeType, url })

        return ok(data);
    }
}


export namespace DataScrapingController {
    export type Request = HttpRequest<DataScrapingByUrlInterface.Request>;
    export type Response = HttpResponse<DataScrapingByUrlInterface.Response>;
}