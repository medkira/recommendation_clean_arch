import { ImageContribution } from "@domain/entities/ImageContribution";
import { UseCase } from "../UseCase";

export interface GetLatestImageContributionInterface extends UseCase<GetLatestImageContributionInterface.Request, GetLatestImageContributionInterface.Response> {
    execute(params: GetLatestImageContributionInterface.Request): Promise<GetLatestImageContributionInterface.Response>;
}

export namespace GetLatestImageContributionInterface {
    export type Request = { page?: number, user_name: string, paginationLimit: number };
    export type Response = { data: ImageContribution[], page: number, totalPages: number };
}