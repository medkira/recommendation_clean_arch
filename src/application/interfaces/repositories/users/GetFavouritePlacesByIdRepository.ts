import { Place } from "@domain/entities/Place";

export interface GetFavouritePlacesByIdRepository {
    getFavouritePlacesById(
        id: GetFavouritePlacesByIdRepository.Request
    ): Promise<GetFavouritePlacesByIdRepository.Response>;
}

export namespace GetFavouritePlacesByIdRepository {
    export type Request = string;
    export type Response = Place[] | null;
}
