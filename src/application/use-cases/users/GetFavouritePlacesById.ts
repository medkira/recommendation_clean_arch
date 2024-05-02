import { GetFavouritePlacesByIdRepository } from "@application/interfaces/repositories/users/GetFavouritePlacesByIdRepository";
import { GetFavouritePlacesByIdInterface } from "@application/interfaces/use-cases/users/GetFavouritePlacesByIdInterface";

export class GetFavouritePlacesById implements GetFavouritePlacesByIdInterface {
    constructor(
        private readonly getFavouritePlacesByIdRepository: GetFavouritePlacesByIdRepository
    ) { }
    async execute(
        params: GetFavouritePlacesByIdInterface.Request
    ): Promise<GetFavouritePlacesByIdInterface.Response> {


        return this.getFavouritePlacesByIdRepository.getFavouritePlacesById(params);
    }
}
