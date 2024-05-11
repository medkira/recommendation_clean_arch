import { BaseController } from "@infra/http/controllers/BaseController";
import { GetLatestFoodsController } from "@infra/http/controllers/food/GetLatestFoodsController";
import { makeGetLatestFoods } from "@main/factories/use-case/food/get-latest-food-factory";

export const makeGetLatestFoodsController = (): BaseController => {
    const getLatestFoods = makeGetLatestFoods();

    return new GetLatestFoodsController(getLatestFoods);
}