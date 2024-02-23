import { Place, PlaceProps } from "@domain/entities/Place";
import { UseCase } from "../UseCase";

export interface GetPlaceByIdInterface
  extends UseCase<
    GetPlaceByIdInterface.Request,
    GetPlaceByIdInterface.Response
  > {
  execute(
    placeId: GetPlaceByIdInterface.Request
  ): Promise<GetPlaceByIdInterface.Response>;
}

export namespace GetPlaceByIdInterface {
  export type Request = Pick<PlaceProps, "id">;
  export type Response = Place | null;
}
