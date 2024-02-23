import { PlaceProps } from "@domain/entities/Place";

export interface CreatePlaceRepository {
  createPlace(
    placeData: CreatePlaceRepository.Request
  ): Promise<CreatePlaceRepository.Response>;
}

export namespace CreatePlaceRepository {
  export type Request = Omit<PlaceProps, "id">;
  export type Response = Pick<PlaceProps, "id">;
}
