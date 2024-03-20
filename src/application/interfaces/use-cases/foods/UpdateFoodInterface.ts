import { FoodNotFoundError } from "@application/errors/FoodNotFoundError";
import { FoodProps, Food } from "@domain/entities/Food";
import { UseCase } from "../UseCase";

export interface UpdateFoodInterface
  extends UseCase<UpdateFoodInterface.Request, UpdateFoodInterface.Response> {
  execute(
    params: UpdateFoodInterface.Request
  ): Promise<UpdateFoodInterface.Response>;
}

export namespace UpdateFoodInterface {
  export type FoodDataType = Omit<FoodProps, 'id' | "menu_id" | "place_id">
  export type Request = {
    FoodId: string;
    FoodData: FoodDataType; 
  };
  export type Response = Food | FoodNotFoundError;
}
