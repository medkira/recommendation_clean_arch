import { PlaceProps, Place } from "@domain/entities/Place";

export interface GetPlaceByTypeRepository {
  getPlaceByType(
    placeType: GetPlaceByTypeRepository.Request
  ): Promise<GetPlaceByTypeRepository.Response>;
}

export namespace GetPlaceByTypeRepository {
  export type Request = Pick<PlaceProps, 'type'>;
  export type Response = Place | null;
}
