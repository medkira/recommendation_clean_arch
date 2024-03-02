import { BaseController } from "@infra/http/controllers/BaseController";
import { GetLatestPlacesController } from "@infra/http/controllers/place/GetLatestPlacesController";
import { makeGetLatestPlaces } from "@main/factories/use-case/place/get-latest-place-factory";

export const makeGetLatestPlacesController = (): BaseController => {
    const getLatestPlaces = makeGetLatestPlaces();

    return new GetLatestPlacesController(getLatestPlaces);
}