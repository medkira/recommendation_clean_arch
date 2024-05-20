import { AutoCompletePlaceSearchInterface } from "@application/interfaces/use-cases/places/AutoCompletePlaceSearchInterface";
import { BaseController } from "../BaseController";
import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";
import { HttpResponse } from "@infra/http/interfaces/http/HttpResponse";
import { ok } from "@infra/http/helpers/https";
import { Validation } from "@infra/http/interfaces/validation/validations";

export class AutoCompletePlaceSearchController extends BaseController {

    constructor(
        private readonly autoCompletePlaceSearchValidation: Validation,

        private readonly autoCompletePlaceSearch: AutoCompletePlaceSearchInterface
    ) {
        super(autoCompletePlaceSearchValidation);
    }

    async execute(httpRequest: AutoCompletePlaceSearchController.Request): Promise<AutoCompletePlaceSearchController.Response> {
        const { query } = httpRequest.query!;
        const response = await this.autoCompletePlaceSearch.execute({ query });

        return ok(response);
    }

}


export namespace AutoCompletePlaceSearchController {
    export type Request = HttpRequest<undefined, undefined, AutoCompletePlaceSearchInterface.Request>;
    export type Response = HttpResponse<AutoCompletePlaceSearchInterface.Response>;

}