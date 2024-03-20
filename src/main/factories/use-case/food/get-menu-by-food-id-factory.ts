import { GetMenuByFoodIdInterface } from "@application/interfaces/use-cases/foods/GetMenuByFoodIdInterface";
import { GetMenuByFoodId } from "@application/use-cases/food/GetMenuByFoodId";
import { FoodRepository } from "@infra/db/mongodb/repositories/FoodRepository";
import { MenuRepository } from "@infra/db/mongodb/repositories/MenuRepository";

export const makeGetMenuByFoodId = (): GetMenuByFoodIdInterface => {
  const foodRepository = new FoodRepository();
  const menuRepository = new MenuRepository();
  return new GetMenuByFoodId(foodRepository, menuRepository);
};
