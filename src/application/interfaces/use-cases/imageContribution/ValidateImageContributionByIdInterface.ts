import { UseCase } from "../UseCase";
import { ImageContributionNotFoundError } from "@application/errors/ImageContributionNotFoundError";



export interface ValidateImageContributionByIdInterface
    extends UseCase<
        ValidateImageContributionByIdInterface.Request,
        ValidateImageContributionByIdInterface.Response
    > {
    execute(imageContributionId: ValidateImageContributionByIdInterface.Request): Promise<ValidateImageContributionByIdInterface.Response>;
}

export namespace ValidateImageContributionByIdInterface {
    export type Request = string;
    export type Response = ImageContributionNotFoundError | void;
}
