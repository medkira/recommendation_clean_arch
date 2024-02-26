import { FoodProps } from "@domain/entities/Food";
import { UseCase } from "../UseCase";

export interface CreateFoodInterface
  extends UseCase<CreateFoodInterface.Request, CreateFoodInterface.Response> {
  execute(
    FoodData: CreateFoodInterface.Request
  ): Promise<CreateFoodInterface.Response>;
}

export namespace CreateFoodInterface {
  export type Request = Pick<FoodProps, "name" | "price">;
  export type Response = string;
}
