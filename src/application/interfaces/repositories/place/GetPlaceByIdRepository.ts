import { PlaceNotFoundError } from "@application/errors/PlaceNotFoundError";
import { Place, PlaceProps } from "@domain/entities/Place";

export interface GetPlaceByIdRepository {
  getPlaceById(
    placeId: GetPlaceByIdRepository.Request
  ): Promise<GetPlaceByIdRepository.Response>;
}

export namespace GetPlaceByIdRepository {
  export type Request = Pick<PlaceProps, "id">;
  export type Response = Place | PlaceNotFoundError;
}
