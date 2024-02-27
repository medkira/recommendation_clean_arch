import { Place, PlaceProps } from "@domain/entities/Place";

export interface UpdatePlaceRepository {
  updatePlace(
    params: UpdatePlaceRepository.Request
  ): Promise<UpdatePlaceRepository.Response>;
}

export namespace UpdatePlaceRepository {
  export type placeDataType = Omit<PlaceProps, "id" | "user_id">;
  export type Request = {
    placeId: string;
    placeData: placeDataType;
  };
  export type Response = Place;
}
