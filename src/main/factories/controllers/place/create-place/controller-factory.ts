import { BaseController } from "@infra/http/controllers/BaseController";
import { createPlaceValidation } from "./validation-factory";
import { makeCreatePlace } from "@main/factories/use-case/place/create-place-factory";
import { CreatePlaceController } from "@infra/http/controllers/place/CreatePlaceController";

export const makeCreatePlaceController = (): BaseController => {
  const validation = createPlaceValidation();
  const useCase = makeCreatePlace();
  return new CreatePlaceController(validation, useCase);
};
