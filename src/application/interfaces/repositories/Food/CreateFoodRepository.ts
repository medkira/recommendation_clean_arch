import { FoodProps } from "@domain/entities/Food";

export interface CreateFoodRepository {
  createFood(
    FoodData: CreateFoodRepository.Request
  ): Promise<CreateFoodRepository.Response>;
}

export namespace CreateFoodRepository {
  export type Request = Pick<FoodProps, "name" | "price">;
  export type Response = string;
}
