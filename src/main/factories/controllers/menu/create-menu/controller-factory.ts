import { BaseController } from "@infra/http/controllers/BaseController";
import { CreateMenuController } from "@infra/http/controllers/menu/CreateMenuController";
import { makeCreateMenu } from "@main/factories/use-case/menu/create-menu-factory";
import { createMenuValidation } from "./validation-factory";
import { makeCreateFood } from "@main/factories/use-case/food/create-food-factory";
import { makeGetPlaceById } from "@main/factories/use-case/place/get-place-by-id-factory";
import { makeGetFoodById } from "@main/factories/use-case/food/get-food-by-id-factory";
import { makeUpdateFood } from "@main/factories/use-case/food/update-food-factory";
import { OCRAdapter } from "@infra/utils/OCR-GOOGLE/ocr-adapter";

export const makeCreateMenuController = (): BaseController => {
  const validation = createMenuValidation();
  const createMenuUseCase = makeCreateMenu();
  const createFoodUseCase = makeCreateFood();
  const getPlaceByIdUseCase = makeGetPlaceById();
  const getFoodByIdUseCase = makeGetFoodById();
  const updatefoodUseCase = makeUpdateFood();
  return new CreateMenuController(
    validation,
    getPlaceByIdUseCase,
    createMenuUseCase,
    createFoodUseCase,
    updatefoodUseCase,
    getFoodByIdUseCase,
    new OCRAdapter // this wrong, need to be in use case favtory
  );
};
