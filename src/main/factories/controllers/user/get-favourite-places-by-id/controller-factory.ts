import { BaseController } from "@infra/http/controllers/BaseController";
import { GetFavouritePlacesByIdController } from "@infra/http/controllers/user/GetFavouritePlacesByIdController";
import { makeGetFavouritePlacesById } from "@main/factories/use-case/user/get-favourite-places-by-id-factory";

export const makeGetFavouritePlacesByIdController = (): BaseController => {
    const getFavouritePlacesById = makeGetFavouritePlacesById();

    return new GetFavouritePlacesByIdController(getFavouritePlacesById);
}