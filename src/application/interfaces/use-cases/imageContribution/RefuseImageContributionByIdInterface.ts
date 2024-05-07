import { UseCase } from "../UseCase";
import { ImageContributionNotFoundError } from "@application/errors/ImageContributionNotFoundError";



export interface RefuseImageContributionByIdInterface

    extends UseCase<
        RefuseImageContributionByIdInterface
        .Request,
        RefuseImageContributionByIdInterface
        .Response
    > {
    execute(imageContributionId: RefuseImageContributionByIdInterface
        .Request): Promise<RefuseImageContributionByIdInterface
            .Response>;
}

export namespace RefuseImageContributionByIdInterface {
    export type Request = string;
    export type Response = ImageContributionNotFoundError | void;
}
