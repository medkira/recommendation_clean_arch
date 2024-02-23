import { PlaceProps } from "@domain/entities/Place";

export interface DeletePlaceRepository {
  deletePlace(
    placeId: DeletePlaceRepository.Request
  ): Promise<DeletePlaceRepository.Response>;
}

export namespace DeletePlaceRepository {
  export type Request = string;
  export type Response = void;
}
