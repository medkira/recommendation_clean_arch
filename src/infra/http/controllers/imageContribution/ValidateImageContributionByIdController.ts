import { BaseController } from "../BaseController";
import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";
import { HttpResponse } from "@infra/http/interfaces/http/HttpResponse";
import { ValidateImageContributionByIdInterface } from "@application/interfaces/use-cases/imageContribution/ValidateImageContributionByIdInterface";
import { ok } from "@infra/http/helpers/https";

export class ValidateImageContributionByIdController extends BaseController {

    constructor(
        private readonly validateImageContributionById: ValidateImageContributionByIdInterface
    ) {
        super();
    }

    async execute(httpRequest: ValidateImageContributionByIdController.Request): Promise<ValidateImageContributionByIdController.Response> {
        const { id } = httpRequest.body!;
        // console.log(httpRequest.body)
        await this.validateImageContributionById.execute(id);

        return ok({ image: "image validated" })
    }

}

export namespace ValidateImageContributionByIdController {
    export type Request = HttpRequest<{ id: string }>
    export type Response = HttpResponse<ValidateImageContributionByIdInterface.Response>;
}