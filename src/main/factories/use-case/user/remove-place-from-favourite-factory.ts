import { AddPlaceToFavouriteInterface } from "@application/interfaces/use-cases/users/AddPlaceToFavouriteInterface";
import { RemovePlaceFromFavouriteInterface } from "@application/interfaces/use-cases/users/RemovePlaceFromFavouriteInterface";
import { AddPlaceToFavourite } from "@application/use-cases/users/AddPlaceToFavourite";
import { RemovePlaceFromFavourite } from "@application/use-cases/users/RemovePLaceFromFavourite";
import { NormalUserRepository } from "@infra/db/mongodb/repositories/NormalUserRepository";

export const makeRemovePlaceFromFavourite = (): RemovePlaceFromFavouriteInterface => {
    const normalUserRepository = new NormalUserRepository();


    return new RemovePlaceFromFavourite(normalUserRepository);
}