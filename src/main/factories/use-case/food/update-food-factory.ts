import { UpdateFoodInterface } from "@application/interfaces/use-cases/foods/UpdateFoodInterface";
import { UpdateFood } from "@application/use-cases/food/UpdateFood";
import { FoodRepository } from "@infra/db/mongodb/repositories/FoodRepository";





export const makeUpdateFood = (): UpdateFoodInterface => {
    const foodRepository = new FoodRepository();
    return new UpdateFood(foodRepository);
  };
  


