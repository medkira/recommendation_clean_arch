import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";
import { HttpResponse } from "@infra/http/interfaces/http/HttpResponse";
import { BaseController } from "../BaseController";
import { CreateImageContributionInterface } from "@application/interfaces/use-cases/imageContribution/CreateImageContributionInterface";
import { Validation } from "@infra/http/interfaces/validation/validations";
import { LoadUserByIdInterface } from "@application/interfaces/use-cases/users/LoadUserByIdInterface";
import { notFound, ok } from "@infra/http/helpers/https";
import { UserNotFoundError } from "@application/errors/UserNotFoundError";

export class CreateImageContributionController extends BaseController {

    constructor(
        // public readonly createImageContributionValidation: Validation,
        private readonly createImageContribution: CreateImageContributionInterface,
        private readonly loadUserById: LoadUserByIdInterface,

    ) {
        super();
    }



    async execute(httpRequest: CreateImageContributionController.Request): Promise<CreateImageContributionController.Response> {


        const userId = httpRequest.userId!;
        const userOrUserNotFoundEroor = await this.loadUserById.execute(userId);

        // add this check to be abel to see all props or user 
        if (userOrUserNotFoundEroor instanceof UserNotFoundError) {
            /// suppose to return an error...
            return notFound(userOrUserNotFoundEroor);
        }
        const { username } = userOrUserNotFoundEroor;
        const { image = httpRequest.files?.postImage, place_id } = httpRequest.body!;

        const imageContributionId = await this.createImageContribution.execute(
            { image, place_id, user_id: userId, user_name: username })
        return ok({ imageContributionId, message: "your image contribution created successfully" });
    }

}

export namespace CreateImageContributionController {
    export type Request = HttpRequest<
        Omit<CreateImageContributionInterface.Request, "user_id" | "user_name" | "place_name">,
        undefined,
        undefined,
        { image: File[] }
    >;

    export type Response = HttpResponse<{ imageContributionId: string } | UserNotFoundError>;
}