import { BaseController } from "../BaseController";
import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";
import { HttpResponse } from "@infra/http/interfaces/http/HttpResponse";
import { ok } from "@infra/http/helpers/https";
import { GetLatesRatesInterface } from "@application/interfaces/use-cases/rates/GetLatestRatesInterface";

export class GetLatestRatesController extends BaseController {
    constructor(private readonly getLatestRates: GetLatesRatesInterface) {
        super();
    }

    async execute(
        httpRequest: GetLatestRatesController.Request
    ): Promise<GetLatestRatesController.Response> {
        const { page, rated_id } = httpRequest.query!;

        const response = await this.getLatestRates.execute({
            page,
            rated_id
        });

        return ok(response);
    }
}

export namespace GetLatestRatesController {
    export type Request = HttpRequest<
        undefined,
        undefined,
        GetLatesRatesInterface.Request
    >;
    export type Response = HttpResponse<GetLatesRatesInterface.Response>;
}
