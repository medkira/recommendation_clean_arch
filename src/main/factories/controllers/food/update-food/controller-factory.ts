import { BaseController } from "@infra/http/controllers/BaseController";
import { UpdateFoodController } from "@infra/http/controllers/food/UpdateFoodController";
import { makeGetFoodById } from "@main/factories/use-case/food/get-food-by-id-factory";
import { makeGetPlaceByFoodId } from "@main/factories/use-case/food/get-place-by-food-id-factory";
import { makeUpdateFood } from "@main/factories/use-case/food/update-food-factory";
import { makeUpdateFoodValidation } from "./validation-factory";

export const makeUpdateFoodController = (): BaseController => {
  const getFoodByIdUseCase = makeGetFoodById();
  const updatedFoodUseCase = makeUpdateFood();
  const validation = makeUpdateFoodValidation();
  const getPlaceByFoodId = makeGetPlaceByFoodId();
  return new UpdateFoodController(
    validation,
    getFoodByIdUseCase,
    updatedFoodUseCase,
    getPlaceByFoodId
  );
};
