import { PlaceNotFoundError } from "@application/errors/PlaceNotFoundError";
import { UseCase } from "../UseCase";
import { UserNotFoundError } from "@application/errors/UserNotFoundError";

export interface SendUserEmailAcceptPLaceContributionByIdInterface extends UseCase<SendUserEmailAcceptPLaceContributionByIdInterface.Request, SendUserEmailAcceptPLaceContributionByIdInterface.Response> {
    execute(placeId: SendUserEmailAcceptPLaceContributionByIdInterface.Request): Promise<SendUserEmailAcceptPLaceContributionByIdInterface.Response>;

}

export namespace SendUserEmailAcceptPLaceContributionByIdInterface {
    export type Request = string;
    export type Response = void | PlaceNotFoundError | UserNotFoundError;
}