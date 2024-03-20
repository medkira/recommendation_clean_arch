import { GetFoodByIdInterface } from "@application/interfaces/use-cases/foods/GetFoodByIdInterface";
import { GetFoodById } from "@application/use-cases/food/GetFoodById";
import { FoodRepository } from "@infra/db/mongodb/repositories/FoodRepository";

export const makeGetFoodById = (): GetFoodByIdInterface => {
  const foodRepository = new FoodRepository();
  return new GetFoodById(foodRepository);
};
