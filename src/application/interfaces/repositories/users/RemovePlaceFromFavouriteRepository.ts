import { Rate } from "@domain/entities/Rates";

export interface RemovePlaceFromFavouriteRepository {
    removePlaceFromFavourite(
        params: RemovePlaceFromFavouriteRepository.Request
    ): Promise<RemovePlaceFromFavouriteRepository.Response>;
}

export namespace RemovePlaceFromFavouriteRepository {
    export type Request = { userId: string, placeId: string };
    export type Response = void;
}
