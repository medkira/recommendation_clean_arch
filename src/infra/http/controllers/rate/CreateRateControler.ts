import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";
import { HttpResponse } from "@infra/http/interfaces/http/HttpResponse";
import { Validation } from "@infra/http/interfaces/validation/validations";
import { BaseController } from "../BaseController";
import { ok } from "@infra/http/helpers/https";
import { File } from "@domain/entities/File";
import { LoadUserByIdInterface } from "@application/interfaces/use-cases/users/LoadUserByIdInterface";
import { UserNotFoundError } from "@application/errors/UserNotFoundError";
import { CreateRateInterface } from "@application/interfaces/use-cases/rates/CreateRateInterface";

export class CreateRateController extends BaseController {
    constructor(
        private readonly createRateValidation: Validation,
        private readonly createRate: CreateRateInterface,
    ) {
        super(createRateValidation);
    }

    async execute(
        httpRequest: CreateRateController.Request
    ): Promise<CreateRateController.Response> {


        const userId = httpRequest.userId!;
        // const userOrUserNotFoundError = await this.loadUserById.execute(userId);

        // add this check to be abel to see all props or user 
        // if (userOrUserNotFoundEroor instanceof UserNotFoundError) {
        //   /// suppose to return an error...
        //   return new UserNotFoundError()
        // }
        // const { name } = userOrUserNotFoundError;


        const { rate, rated_id, review, rated_name } = httpRequest.body!;


        const RateId = await this.createRate.execute({ rate, rated_id, review, rated_name, user_id: userId });

        return ok({ RateId, message: "Rate created successfully" });
    }
}

export namespace CreateRateController {
    export type Request = HttpRequest<
        Omit<CreateRateInterface.Request, "userId">,
        undefined,
        undefined
    >;

    export type Response = HttpResponse<{ RateId: string }>;
}
