import { DeleteFoodInterface } from "@application/interfaces/use-cases/foods/DeleteFoodInterface";
import { DeleteFood } from "@application/use-cases/food/DeleteFood";
import { FoodRepository } from "@infra/db/mongodb/repositories/FoodRepository";

export const makeDeleteFood = (): DeleteFoodInterface => {
  const foodRepository = new FoodRepository();
  return new DeleteFood(foodRepository);
};
