import { UseCase } from "../UseCase";
import { ImageContributionProps } from "@domain/entities/ImageContribution";

export interface CreateImageContributionInterface
    extends UseCase<CreateImageContributionInterface.Request, CreateImageContributionInterface.Response> {
    execute(
        imageContributionData: CreateImageContributionInterface.Request
    ): Promise<CreateImageContributionInterface.Response>;
}

export namespace CreateImageContributionInterface {
    export type Request = Omit<ImageContributionProps, "id" | "createdAt" | "is_verified">;
    export type Response = string;
}
