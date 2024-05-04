import { BaseController } from "../BaseController";
import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";
import { HttpResponse } from "@infra/http/interfaces/http/HttpResponse";
import { ok } from "@infra/http/helpers/https";
import { GetLatestImageContributionInterface } from "@application/interfaces/use-cases/imageContribution/GetLatestImageContributionInterface";

export class GetLatestImageContributionController extends BaseController {
    constructor(private readonly getLatestPlaces: GetLatestImageContributionInterface) {
        super();
    }

    async execute(
        httpRequest: GetLatestImageContributionController.Request
    ): Promise<GetLatestImageContributionController.Response> {
        const { page, user_name, paginationLimit } = httpRequest.query!;

        const response = await this.getLatestPlaces.execute({
            page,
            paginationLimit,
            user_name
        });

        return ok(response);
    }
}

export namespace GetLatestImageContributionController {
    export type Request = HttpRequest<
        undefined,
        undefined,
        GetLatestImageContributionInterface.Request
    >;
    export type Response = HttpResponse<GetLatestImageContributionInterface.Response>;
}
