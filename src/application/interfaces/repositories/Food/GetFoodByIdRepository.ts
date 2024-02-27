import { FoodNotFoundError } from "@application/errors/FoodNotFoundError";
import { FoodProps, Food } from "@domain/entities/Food";

export interface GetFoodByIdRepository {
  getFoodById(
    FoodId: GetFoodByIdRepository.Request
  ): Promise<GetFoodByIdRepository.Response>;
}

export namespace GetFoodByIdRepository {
  export type Request = Pick<FoodProps, "id">;
  export type Response = Food | null;
}
