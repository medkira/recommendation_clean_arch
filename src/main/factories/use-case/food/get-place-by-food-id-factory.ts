import { GetMenuByFoodIdInterface } from "@application/interfaces/use-cases/foods/GetMenuByFoodIdInterface";
import { GetPlaceByFoodIdInterface } from "@application/interfaces/use-cases/foods/GetPlaceByFoodIdInterface";
import { GetMenuByFoodId } from "@application/use-cases/food/GetMenuByFoodId";
import { GetPlaceByFoodId } from "@application/use-cases/food/GetPlaceByFoodId";
import { FoodRepository } from "@infra/db/mongodb/repositories/FoodRepository";
import { MenuRepository } from "@infra/db/mongodb/repositories/MenuRepository";
import { PlaceRepository } from "@infra/db/mongodb/repositories/PlaceRepository";

export const makeGetPlaceByFoodId = (): GetPlaceByFoodIdInterface => {
  const foodRepository = new FoodRepository();
  const placeRepository = new PlaceRepository();
  return new GetPlaceByFoodId(foodRepository, placeRepository);
};
