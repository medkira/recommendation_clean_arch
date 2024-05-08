import { BaseController } from "../BaseController";
import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";
import { HttpResponse } from "@infra/http/interfaces/http/HttpResponse";
import { ok } from "@infra/http/helpers/https";
import { GetUsersInterface } from "@application/interfaces/use-cases/users/GetUsersInterface";

export class GetUsersontroller extends BaseController {
    constructor(private readonly getLatestPlaces: GetUsersInterface) {
        super();
    }

    async execute(
        httpRequest: GetUsersontroller.Request
    ): Promise<GetUsersontroller.Response> {
        const { page, isEmailVerified, role } = httpRequest.query!;

        const response = await this.getLatestPlaces.execute({
            isEmailVerified,
            page,
            role,
        });

        return ok(response);
    }
}

export namespace GetUsersontroller {
    export type Request = HttpRequest<
        undefined,
        undefined,
        GetUsersInterface.Request
    >;
    export type Response = HttpResponse<GetUsersInterface.Response>;
}
