import { AddPlaceToFavouriteInterface } from "@application/interfaces/use-cases/users/AddPlaceToFavouriteInterface";
import { AddPlaceToFavourite } from "@application/use-cases/users/AddPlaceToFavourite";
import { NormalUserRepository } from "@infra/db/mongodb/repositories/NormalUserRepository";

export const makeAddPlaceToFavourite = (): AddPlaceToFavouriteInterface => {
    const normalUserRepository = new NormalUserRepository();


    return new AddPlaceToFavourite(normalUserRepository);
}