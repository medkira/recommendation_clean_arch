import { BaseController } from "@infra/http/controllers/BaseController";
import { CreateFoodController } from "@infra/http/controllers/food/Create FoodController";
import { makeCreateFood } from "@main/factories/use-case/food/create-food-factory";
import { createFoodValidation } from "./validation-factory";
import { makeGetPlaceById } from "@main/factories/use-case/place/get-place-by-id-factory";

export const makeCreateFoodController = (): BaseController => {
  const validation = createFoodValidation();
  const createFoodUseCase = makeCreateFood();
  const getPlaceByIdUseCase = makeGetPlaceById();
  return new CreateFoodController(
    validation,
    getPlaceByIdUseCase,
    createFoodUseCase
  );
};
