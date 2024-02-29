import { Place } from "@domain/entities/Place";
import { UseCase } from "../UseCase";
import { PlaceNotFoundError } from "@application/errors/PlaceNotFoundError";

export interface GetPlaceByIdInterface
  extends UseCase<
    GetPlaceByIdInterface.Request,
    GetPlaceByIdInterface.Response
  > {
  execute(placeId: GetPlaceByIdInterface.Request): Promise<GetPlaceByIdInterface.Response>;
}

export namespace GetPlaceByIdInterface {
  export type Request = string;
  export type Response = Place | PlaceNotFoundError;
}
