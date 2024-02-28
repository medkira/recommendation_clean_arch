import { BaseController } from "@infra/http/controllers/BaseController";
import { UpdatePlaceController } from "@infra/http/controllers/place/UpdatePlaceController";
import { makeGetPlaceById } from "@main/factories/use-case/place/get-place-by-id-factory";
import { makeUpdatePlace } from "@main/factories/use-case/place/update-place-factory";
import { makeUpdatePlaceValidation } from "./validation-factory";

export const makeUpdatePlaceController = (): BaseController => {
  const getPlaceByIdUseCase = makeGetPlaceById();
  const updatedPlaceUseCase = makeUpdatePlace();
  const validation = makeUpdatePlaceValidation();
  return new UpdatePlaceController(
    validation,
    getPlaceByIdUseCase,
    updatedPlaceUseCase
  );
};
