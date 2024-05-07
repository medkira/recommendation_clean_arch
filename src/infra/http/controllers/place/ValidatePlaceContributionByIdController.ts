import { ValidationPlaceContributionByIdInterface } from "@application/interfaces/use-cases/places/ValidationPlaceContributionByIdInterface";
import { BaseController } from "../BaseController";
import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";
import { HttpResponse } from "@infra/http/interfaces/http/HttpResponse";
import { ok } from "@infra/http/helpers/https";



export class ValidatePlaceContributionByIdController extends BaseController {

    constructor(
        private readonly ValidatePlaceContributionById: ValidationPlaceContributionByIdInterface
    ) {
        super();
    }

    async execute(httpRequest: ValidatePlaceContributionByIdController.Request): Promise<ValidatePlaceContributionByIdController.Response> {
        const { id } = httpRequest.params!;
        // console.log(httpRequest.body)
        await this.ValidatePlaceContributionById.execute(id);

        return ok({ image: "place validated" });
    }

}

export namespace ValidatePlaceContributionByIdController {
    export type Request = HttpRequest<undefined, { id: string }>
    export type Response = HttpResponse<ValidationPlaceContributionByIdInterface.Response>;
}