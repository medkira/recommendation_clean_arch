import { ImageContribution } from "@domain/entities/ImageContribution";

export interface GetImageContributionByIdRepository {
    GetImageContributionById(
        contributionById: GetImageContributionByIdRepository.Request
    ): Promise<GetImageContributionByIdRepository.Response>;
}

export namespace GetImageContributionByIdRepository {
    export type Request = string;
    export type Response = ImageContribution | null;
}
