import { BaseController } from "@infra/http/controllers/BaseController";
import { DeleteFoodController } from "@infra/http/controllers/food/DeleteFoodController";
import { makeDeleteFood } from "@main/factories/use-case/food/delete-food-factory";
import { makeGetFoodById } from "@main/factories/use-case/food/get-food-by-id-factory";
import { makeGetPlaceByFoodId } from "@main/factories/use-case/food/get-place-by-food-id-factory";

export const makeDeleteFoodController = (): BaseController => {
  const getFoodByIdUseCase = makeGetFoodById();
  const deleteFoodUsecase = makeDeleteFood();
  const getPlaceByFoodIdUseCase = makeGetPlaceByFoodId()

  return new DeleteFoodController(getFoodByIdUseCase, deleteFoodUsecase,getPlaceByFoodIdUseCase);
};
