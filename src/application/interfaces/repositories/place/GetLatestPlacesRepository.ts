import { Place, placeTypes } from "@domain/entities/Place";

export interface GetLatestPlacesRepository {
    getLatestPlaces(params: GetLatestPlacesRepository.Request): Promise<GetLatestPlacesRepository.Response>;
}

export namespace GetLatestPlacesRepository {
    export type Request = { page: number, paginationLimit: number, query: any };
    export type Response = { data: Place[], page: number, total: number, totalPages: number };
}