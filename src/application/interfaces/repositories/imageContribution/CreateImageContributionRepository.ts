import { ImageContributionProps } from "@domain/entities/ImageContribution";

export interface CreateImageContributionRepository {
    createImageContribution(
        imageContributionData: CreateImageContributionRepository.Request
    ): Promise<CreateImageContributionRepository.Response>;
}

export namespace CreateImageContributionRepository {
    export type Request = Omit<
        ImageContributionProps,
        "id" | "createdAt" | "is_verified">;
    export type Response = string;
}
