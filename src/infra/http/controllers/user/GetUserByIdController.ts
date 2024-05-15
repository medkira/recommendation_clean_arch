import { BaseController } from "../BaseController";
import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";
import { HttpResponse } from "@infra/http/interfaces/http/HttpResponse";
import { notFound, ok } from "@infra/http/helpers/https";

import { UserNotFoundError } from "@application/errors/UserNotFoundError";
import { LoadUserByIdInterface } from "@application/interfaces/use-cases/users/LoadUserByIdInterface";
import { NormalUser } from "@domain/entities/NormalUser";

export class GetUserByIdController extends BaseController {
    constructor(private readonly loadUserById: LoadUserByIdInterface) {
        super();
    }

    async execute(
        httpRequest: GetUserByIdController.Request
    ): Promise<GetUserByIdController.Response> {
        const id = httpRequest.userId!;

        const userOrUserNotFoundEroor = await this.loadUserById.execute(id);

        // add this check to be abel to see all props or user 
        if (userOrUserNotFoundEroor instanceof UserNotFoundError) {
            /// suppose to return an error...
            return notFound(userOrUserNotFoundEroor)
        }

        const { address, age, email
            , username, country, firstName, lastName, profileImage,
            phoneNumber, salary, socialStatus, jobTitle, isEmailVerified } = userOrUserNotFoundEroor as NormalUser;

        return ok({
            address, age, email
            , username, country, firstName, profileImage,
            phoneNumber, salary, socialStatus, jobTitle, isEmailVerified, lastName
        });
    }
}

export namespace GetUserByIdController {
    export type Request = HttpRequest<undefined>;
    export type Response = HttpResponse<LoadUserByIdInterface.Response>;
}
