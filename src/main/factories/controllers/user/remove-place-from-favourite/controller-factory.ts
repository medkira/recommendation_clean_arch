import { BaseController } from "@infra/http/controllers/BaseController";
import { RemovePlaceFromFavouriteController } from "@infra/http/controllers/user/RemovePlaceFromFavouriteController";
import { makeGetPlaceById } from "@main/factories/use-case/place/get-place-by-id-factory";
import { makeRemovePlaceFromFavourite } from "@main/factories/use-case/user/remove-place-from-favourite-factory";

export const makeRemovePlaceFromFavouriteController = (): BaseController => {
    const getPlaceById = makeGetPlaceById();
    const addPlaceToFavourite = makeRemovePlaceFromFavourite()
    return new RemovePlaceFromFavouriteController(getPlaceById, addPlaceToFavourite)
}