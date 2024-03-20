import { BaseController } from "@infra/http/controllers/BaseController";
import { ShareController } from "@infra/http/controllers/normalUser/ShareFoodController";
import { makeShareValidation } from "./validation-factory";
import { makeGetFoodById } from "@main/factories/use-case/food/get-food-by-id-factory";
import { makeShareFood } from "@main/factories/use-case/normalUser/share-food-factory";

export const makeShareController = (): BaseController => {
  const usecase = makeShareFood();
  const getFoodByIdUseCase = makeGetFoodById();
  const validation = makeShareValidation();
  return new ShareController(validation, usecase, getFoodByIdUseCase);
};
