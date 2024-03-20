import { BaseController } from "@infra/http/controllers/BaseController";
import { GetMenuByFoodIdController } from "@infra/http/controllers/food/GetMenuByFoodIdController";
import { makeGetMenuByFoodId } from "@main/factories/use-case/food/get-menu-by-food-id-factory";

export const makeGetMenuByFoodIdController = (): BaseController => {
  const getMenuByFoodIdUseCase = makeGetMenuByFoodId();
  return new GetMenuByFoodIdController(getMenuByFoodIdUseCase);
};
