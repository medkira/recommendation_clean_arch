import { ImageContribution } from "@domain/entities/ImageContribution";

export interface GetLatestImageContributionRepository {
    getLatestImageContribution(params: GetLatestImageContributionRepository.Request): Promise<GetLatestImageContributionRepository.Response>
}

export namespace GetLatestImageContributionRepository {
    export type Request = { page: number, paginationLimit: number, query: any };
    export type Response = { data: ImageContribution[], page: number, total: number, totalPages: number };
}