import { BaseController } from "@infra/http/controllers/BaseController";
import { GetFoodByIdController } from "@infra/http/controllers/food/GetFoodByIdController";
import { makeGetFoodById } from "@main/factories/use-case/food/get-food-by-id-factory";

export const makeGetFoodByIdController = (): BaseController => {
  const getFoodByIdUseCase = makeGetFoodById();
  return new GetFoodByIdController(getFoodByIdUseCase);
};
