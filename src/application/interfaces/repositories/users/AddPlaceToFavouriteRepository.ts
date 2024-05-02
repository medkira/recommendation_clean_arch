import { Rate } from "@domain/entities/Rates";

export interface AddPlaceToFavouriteRepository {
    addPlaceToFavourite(
        params: AddPlaceToFavouriteRepository.Request
    ): Promise<AddPlaceToFavouriteRepository.Response>;
}

export namespace AddPlaceToFavouriteRepository {
    export type Request = { userId: string, placeId: string };
    export type Response = void;
}
