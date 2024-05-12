import { BaseController } from "../BaseController";
import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";
import { HttpResponse } from "@infra/http/interfaces/http/HttpResponse";
import { ok } from "@infra/http/helpers/https";
import { GetLatesFoodsInterface } from "@application/interfaces/use-cases/foods/GetLatestFoodsInterface";

export class GetLatestFoodsController extends BaseController {
    constructor(private readonly getLatestFoods: GetLatesFoodsInterface) {
        super();
    }

    async execute(
        httpRequest: GetLatestFoodsController.Request
    ): Promise<GetLatestFoodsController.Response> {
        const { page, type, is_verified, user_id, price, place_id } = httpRequest.query!;

        const response = await this.getLatestFoods.execute({
            is_verified,
            page,
            type,
            price,
            user_id,
            place_id
        });

        return ok(response);
    }
}

export namespace GetLatestFoodsController {
    export type Request = HttpRequest<
        undefined,
        undefined,
        GetLatesFoodsInterface.Request
    >;
    export type Response = HttpResponse<GetLatesFoodsInterface.Response>;
}
