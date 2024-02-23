import { PlaceProps } from "@domain/entities/Place";
import { UseCase } from "../UseCase";

export interface DeletePlaceInterface
  extends UseCase<DeletePlaceInterface.Request, DeletePlaceInterface.Response> {
  execute(
    placeId: DeletePlaceInterface.Request
  ): Promise<DeletePlaceInterface.Response>;
}

export namespace DeletePlaceInterface {
  export type Request = string;
  export type Response = void;
}
