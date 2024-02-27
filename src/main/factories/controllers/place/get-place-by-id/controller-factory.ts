import { BaseController } from "@infra/http/controllers/BaseController";
import { GetPlaceByIdController } from "@infra/http/controllers/place/GetPlaceByIdController";
import { makeGetPlaceById } from "@main/factories/use-case/place/get-place-by-id-factory";

export const makeGetPlaceByIdController = (): BaseController => {
  const getPlaceByIdUseCase = makeGetPlaceById();
  return new GetPlaceByIdController(getPlaceByIdUseCase);
};
