import { PlaceProps, Place } from "@domain/entities/Place";

export interface GetPlaceByTypeRepository {
  getPlaceByType(
    placeType: GetPlaceByTypeRepository.Request
  ): Promise<GetPlaceByTypeRepository.Response>;
}

export namespace GetPlaceByTypeRepository {
  export type Request = string;
  export type Response = Place | null;
}
