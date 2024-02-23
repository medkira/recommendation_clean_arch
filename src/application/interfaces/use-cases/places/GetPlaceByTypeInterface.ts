import { PlaceProps, Place } from "@domain/entities/Place";
import { UseCase } from "../UseCase";

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
  export type Request = Pick<PlaceProps, "type">;
  export type Response = Place | null;
}
