import { BaseController } from "@infra/http/controllers/BaseController";
import { AddPlaceToFavouriteController } from "@infra/http/controllers/user/AddPlaceToFavouriteController";
import { makeGetPlaceById } from "@main/factories/use-case/place/get-place-by-id-factory";
import { makeAddPlaceToFavourite } from "@main/factories/use-case/user/add-place-to-favourite-factory";

export const makeAddPlaceToFavouriteController = (): BaseController => {
    const getPlaceById = makeGetPlaceById();
    const addPlaceToFavourite = makeAddPlaceToFavourite()
    return new AddPlaceToFavouriteController(getPlaceById, addPlaceToFavourite)
}