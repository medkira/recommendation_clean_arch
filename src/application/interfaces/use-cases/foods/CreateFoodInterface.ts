import { Food, FoodProps } from "@domain/entities/Food";
import { UseCase } from "../UseCase";

export interface CreateFoodInterface
  extends UseCase<CreateFoodInterface.Request, CreateFoodInterface.Response> {
  execute(
    foodData: CreateFoodInterface.Request
  ): Promise<CreateFoodInterface.Response>;
}

export namespace CreateFoodInterface {
  export type Request = Omit<FoodProps, "id" | "menu_id">;
  export type Response = string;
}
