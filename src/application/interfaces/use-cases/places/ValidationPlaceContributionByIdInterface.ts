import { PlaceNotFoundError } from "@application/errors/PlaceNotFoundError";
import { UseCase } from "../UseCase";


export interface ValidationPlaceContributionByIdInterface
    extends UseCase<
        ValidationPlaceContributionByIdInterface.Request,
        ValidationPlaceContributionByIdInterface.Response
    > {
    execute(placeId: ValidationPlaceContributionByIdInterface.Request): Promise<ValidationPlaceContributionByIdInterface.Response>;
}

export namespace ValidationPlaceContributionByIdInterface {
    export type Request = string;
    export type Response = PlaceNotFoundError | void;
}
