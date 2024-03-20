import { FoodProps, Food } from "@domain/entities/Food";
import { UseCase } from "../UseCase";
import { FoodNotFoundError } from "@application/errors/FoodNotFoundError";

export interface GetFoodByIdInterface
  extends UseCase<GetFoodByIdInterface.Request, GetFoodByIdInterface.Response> {
  execute(
    FoodId: GetFoodByIdInterface.Request
  ): Promise<GetFoodByIdInterface.Response>;
}

export namespace GetFoodByIdInterface {
  export type Request = string;
  export type Response = FoodProps | FoodNotFoundError;
}
