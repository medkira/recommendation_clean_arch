import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";
import { HttpResponse } from "@infra/http/interfaces/http/HttpResponse";
import { Validation } from "@infra/http/interfaces/validation/validations";
import { BaseController } from "../BaseController";
import { notFound, ok } from "@infra/http/helpers/https";
import { File } from "@domain/entities/File";
import { LoadUserByIdInterface } from "@application/interfaces/use-cases/users/LoadUserByIdInterface";
import { UserNotFoundError } from "@application/errors/UserNotFoundError";
import { CreateRateInterface } from "@application/interfaces/use-cases/rates/CreateRateInterface";
import { GetRateByIdInterface } from "@application/interfaces/use-cases/rates/GetRateByIdInterface";
import { GetPlaceByIdInterface } from "@application/interfaces/use-cases/places/GetPlaceByIdInterface";
import { PlaceNotFoundError } from "@application/errors/PlaceNotFoundError";

export class CreateRateController extends BaseController {
    constructor(
        private readonly createRateValidation: Validation,
        private readonly createRate: CreateRateInterface,
        private readonly getPlaceById: GetPlaceByIdInterface,
        private readonly loadUserById: LoadUserByIdInterface,

    ) {
        super(createRateValidation);
    }

    async execute(
        httpRequest: CreateRateController.Request
    ): Promise<CreateRateController.Response> {


        const userId = httpRequest.userId!;

        const userOrUserNotFoundError = await this.loadUserById.execute(userId);
        if (userOrUserNotFoundError instanceof UserNotFoundError) {
            return notFound(userOrUserNotFoundError)
        }

        const { username } = userOrUserNotFoundError;
        // add this check to be abel to see all props or user 
        if (userOrUserNotFoundError instanceof UserNotFoundError) {
            /// suppose to return an error...
            return notFound(userOrUserNotFoundError)
        }
        const { rate, rated_id, review, rated_name, } = httpRequest.body!;
        const placeOrError = await this.getPlaceById.execute(rated_id);
        if (placeOrError instanceof PlaceNotFoundError) {
            return notFound(placeOrError);
        }

        const RateId = await this.createRate.execute({ rate, rated_id, review, rated_name, user_id: userId, user_name: username });

        return ok({ RateId, message: "Rate created successfully" });
    }
}

export namespace CreateRateController {
    export type Request = HttpRequest<
        Omit<CreateRateInterface.Request, "userId">,
        undefined,
        undefined
    >;

    export type Response = HttpResponse<{ RateId: string } | PlaceNotFoundError | UserNotFoundError>;
}
