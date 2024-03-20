import { PlaceNotFoundError } from "@application/errors/PlaceNotFoundError";
import { Place, PlaceProps } from "@domain/entities/Place";
import { UseCase } from "../UseCase";

export interface GetPlaceByFoodIdInterface
  extends UseCase<
    GetPlaceByFoodIdInterface.Request,
    GetPlaceByFoodIdInterface.Response
  > {
  execute(
    FoodId: GetPlaceByFoodIdInterface.Request
  ): Promise<GetPlaceByFoodIdInterface.Response>;
}

export namespace GetPlaceByFoodIdInterface {
  export type Request = string;
  export type Response = PlaceProps | PlaceNotFoundError;
}
