import { PlaceProps, Place } from "@domain/entities/Place";
import { UseCase } from "../UseCase";
import { PlaceNotFoundError } from "@application/errors/PlaceNotFoundError";

export interface GetPlaceByTypeInterface
  extends UseCase<
    GetPlaceByTypeInterface.Request,
    GetPlaceByTypeInterface.Response
  > {
  execute(
    placeType: GetPlaceByTypeInterface.Request
  ): Promise<GetPlaceByTypeInterface.Response>;
}

export namespace GetPlaceByTypeInterface {
  export type Request = string;
  export type Response = Place | null;
}
