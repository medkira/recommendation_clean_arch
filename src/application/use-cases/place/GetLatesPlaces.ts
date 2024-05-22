import { GetLatestPlacesRepository } from "@application/interfaces/repositories/place/GetLatestPlacesRepository";
import { GetLatesPlacesInterface } from "@application/interfaces/use-cases/places/GetlatestPlacesInterface";

export class GetLatesPlaces implements GetLatesPlacesInterface {
    constructor(
        private readonly getLatesrPlacesRepository: GetLatestPlacesRepository
    ) { }
    async execute(params: GetLatesPlacesInterface.Request): Promise<GetLatesPlacesInterface.Response> {
        const { page = 1, type, location, is_verified, user_id } = params;
        const paginationLimit = 50;
        return await this.getLatesrPlacesRepository.getLatestPlaces({
            page, paginationLimit,
            query: {
                ...type && { type },
                ...location && { location },
                ...is_verified && { is_verified },
                ...user_id && { user_id }
                // ...(type ? { type } : {}),
                // ...(location ? { location } : {})
            }
        });


    }

}