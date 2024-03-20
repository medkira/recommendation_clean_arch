import { BaseController } from "@infra/http/controllers/BaseController";
import { GetPlaceByFoodIdController } from "@infra/http/controllers/food/GetPlaceByFoodIdController";
import { makeGetPlaceByFoodId } from "@main/factories/use-case/food/get-place-by-food-id-factory";

export const makeGetPlaceByFoodIdController = (): BaseController => {
  const getPlaceByFoodIdUseCase = makeGetPlaceByFoodId();
  return new GetPlaceByFoodIdController(getPlaceByFoodIdUseCase);
};
