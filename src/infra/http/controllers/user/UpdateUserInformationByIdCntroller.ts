import { BaseController } from "../BaseController";
import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";
import { HttpResponse } from "@infra/http/interfaces/http/HttpResponse";
import { notFound, ok } from "@infra/http/helpers/https";

import { UserNotFoundError } from "@application/errors/UserNotFoundError";
import { NormalUser } from "@domain/entities/NormalUser";
import { UpdateUserInformationByIdInterface } from "@application/interfaces/use-cases/users/UpdateUserInformationByIdInterface";
import { Validation } from "@infra/http/interfaces/validation/validations";

export class UpdateUserInformationByIdCntroller
    extends BaseController {
    constructor(
        private readonly updateUserInforamtionValidation: Validation,
        private readonly updateUserById: UpdateUserInformationByIdInterface

    ) {
        super();
    }

    async execute(
        httpRequest: UpdateUserInformationByIdCntroller
            .Request
    ): Promise<UpdateUserInformationByIdCntroller
        .Response> {
        const id = httpRequest.userId!;
        const { address, email, profileImage = httpRequest.files?.profileImage, jobTitle, salary, username,
            firstName, socialStatus, phoneNumber, lastName, country, } = httpRequest.body!;

        const userUpdated = await this.updateUserById.execute({
            userId: id,
            UserData: {
                address, email, profileImage, jobTitle, salary, username,
                firstName, socialStatus, phoneNumber, lastName, country
            }
        });



        return ok(userUpdated);
    }
}

export namespace UpdateUserInformationByIdCntroller {
    export type Request = HttpRequest<UpdateUserInformationByIdInterface.UserDataType>;
    export type Response = HttpResponse<UpdateUserInformationByIdInterface.Response>;
}
