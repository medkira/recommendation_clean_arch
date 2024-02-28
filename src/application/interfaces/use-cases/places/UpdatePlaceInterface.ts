import { Place, PlaceProps } from "@domain/entities/Place";
import { UseCase } from "../UseCase";
import { PlaceNotFoundError } from "@application/errors/PlaceNotFoundError";

export interface UpdatePlaceInterface
  extends UseCase<UpdatePlaceInterface.Request, UpdatePlaceInterface.Response> {
  execute(
    params: UpdatePlaceInterface.Request
  ): Promise<UpdatePlaceInterface.Response>;
}

export namespace UpdatePlaceInterface {
  export type placeDataType = Omit<PlaceProps, "id" | "user_id">;
  export type Request = {
    placeId: string;
    placeData: placeDataType;
  };
  export type Response = Place | PlaceNotFoundError;
}
