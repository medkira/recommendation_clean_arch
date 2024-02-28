import { BaseController } from "@infra/http/controllers/BaseController";
import { GetPlaceByTypeController } from "@infra/http/controllers/place/GetPlaceByTypeController";
import { makeGetPlaceByType } from "@main/factories/use-case/place/get-place-by-type-factory";

export const makeGetPlaceByTypeController = (): BaseController => {
  const getPlaceByTypeUseCase = makeGetPlaceByType();
  return new GetPlaceByTypeController(getPlaceByTypeUseCase);
};
