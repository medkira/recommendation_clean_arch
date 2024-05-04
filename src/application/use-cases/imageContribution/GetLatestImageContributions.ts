
import { GetLatestImageContributionRepository } from "@application/interfaces/repositories/imageContribution/GetLatestImageContributionRepository";
import { GetLatestPlacesRepository } from "@application/interfaces/repositories/place/GetLatestPlacesRepository";
import { GetLatestImageContributionInterface } from "@application/interfaces/use-cases/imageContribution/GetLatestImageContributionInterface";

export class GetLatestImageContribution implements GetLatestImageContributionInterface {
    constructor(
        private readonly getLatesrPlacesRepository: GetLatestImageContributionRepository
    ) { }
    async execute(params: GetLatestImageContributionInterface.Request): Promise<GetLatestImageContributionInterface.Response> {
        const { page = 1, user_name } = params;
        const paginationLimit = 10;

        return this.getLatesrPlacesRepository.getLatestImageContribution({
            page, paginationLimit,
            query: {
                ...user_name && { user_name }

                // ...(type ? { type } : {}),
                // ...(location ? { location } : {})
            }
        });


    }

}