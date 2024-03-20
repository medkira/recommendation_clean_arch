import { CreateFoodInterface } from "@application/interfaces/use-cases/foods/CreateFoodInterface";
import { CreateFood } from "@application/use-cases/food/CreateFood";
import { FoodRepository } from "@infra/db/mongodb/repositories/FoodRepository";




export const makeCreateFood = (): CreateFoodInterface => {
    const foodRepository = new FoodRepository();

    return new CreateFood(foodRepository);
}