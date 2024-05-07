import { RefuseImageContributionByIdInterface } from "@application/interfaces/use-cases/imageContribution/RefuseImageContributionByIdInterface";
import { BaseController } from "../BaseController";
import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";
import { HttpResponse } from "@infra/http/interfaces/http/HttpResponse";
import { noContent, ok } from "@infra/http/helpers/https";

export class RefuseImageContributionByIdController extends BaseController {

    constructor(
        private readonly refuseImageContributionById: RefuseImageContributionByIdInterface
    ) {
        super()
    }

    async execute(httpRequest: RefuseImageContributionByIdController.Request): Promise<RefuseImageContributionByIdController.Response> {
        const { id } = httpRequest.params!;
        await this.refuseImageContributionById.execute(id);

        return noContent();
    }
}


export namespace RefuseImageContributionByIdController {
    export type Request = HttpRequest<undefined, { id: string }>
    export type Response = HttpResponse<RefuseImageContributionByIdInterface.Response>
}