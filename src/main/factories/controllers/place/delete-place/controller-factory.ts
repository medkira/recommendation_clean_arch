import { BaseController } from "@infra/http/controllers/BaseController";
import { DeletePlaceController } from "@infra/http/controllers/place/DeletePlaceController";
import { makeDeletePlace } from "@main/factories/use-case/place/delete-place-factory";
import { makeGetPlaceById } from "@main/factories/use-case/place/get-place-by-id-factory";

export const makeDeletePlaceController = (): BaseController => {
  const getPlaceByIdUseCase = makeGetPlaceById();
  const deletePlaceUsecase = makeDeletePlace();

  return new DeletePlaceController(getPlaceByIdUseCase, deletePlaceUsecase);
};
