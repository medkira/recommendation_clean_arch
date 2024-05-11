
import { GetLatesFoodsInterface } from "@application/interfaces/use-cases/foods/GetLatestFoodsInterface";
import { GetLatesFoods } from "@application/use-cases/food/GetLatestFoods";
import { FoodRepository } from "@infra/db/mongodb/repositories/FoodRepository";
import { PlaceRepository } from "@infra/db/mongodb/repositories/PlaceRepository";

export const makeGetLatestFoods = (): GetLatesFoodsInterface => {
    const placeRepository = new FoodRepository();
    return new GetLatesFoods(placeRepository);
}