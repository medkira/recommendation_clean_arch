import { FoodProps, Food } from "@domain/entities/Food";

export interface UpdateFoodRepository {
  updateFood(
    params: UpdateFoodRepository.Request
  ): Promise<UpdateFoodRepository.Response>;
}

export namespace UpdateFoodRepository {
  export type FoodDataType = Omit<FoodProps, "id" | "menu_id" | "place_id">;
  export type Request = {
    FoodId: string;
    FoodData: FoodDataType;
  };
  export type Response = Food;
}
