import { AddPlaceToFavouriteRepository } from "@application/interfaces/repositories/users/AddPlaceToFavouriteRepository";
import { RemovePlaceFromFavouriteRepository } from "@application/interfaces/repositories/users/RemovePlaceFromFavouriteRepository";
import { RemovePlaceFromFavouriteInterface } from "@application/interfaces/use-cases/users/RemovePlaceFromFavouriteInterface";


export class RemovePlaceFromFavourite implements RemovePlaceFromFavouriteInterface {
    constructor(
        private readonly removePlaceFromFavourite: RemovePlaceFromFavouriteRepository,

    ) { }
    async execute(params: RemovePlaceFromFavouriteInterface.Request): Promise<RemovePlaceFromFavouriteInterface.Response> {
        await this.removePlaceFromFavourite.removePlaceFromFavourite(params);

    }

}
