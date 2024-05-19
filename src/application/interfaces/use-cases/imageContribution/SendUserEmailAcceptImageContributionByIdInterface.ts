import { PlaceNotFoundError } from "@application/errors/PlaceNotFoundError";
import { UseCase } from "../UseCase";
import { UserNotFoundError } from "@application/errors/UserNotFoundError";

export interface SendUserEmailAcceptImageContributionByIdInterface extends UseCase<SendUserEmailAcceptImageContributionByIdInterface.Request, SendUserEmailAcceptImageContributionByIdInterface.Response> {
    execute(imageId: SendUserEmailAcceptImageContributionByIdInterface.Request): Promise<SendUserEmailAcceptImageContributionByIdInterface.Response>;

}

export namespace SendUserEmailAcceptImageContributionByIdInterface {
    export type Request = string;
    export type Response = void | PlaceNotFoundError | UserNotFoundError;
}