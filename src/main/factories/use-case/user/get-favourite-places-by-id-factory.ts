import { GetFavouritePlacesByIdInterface } from "@application/interfaces/use-cases/users/GetFavouritePlacesByIdInterface";
import { GetFavouritePlacesById } from "@application/use-cases/users/GetFavouritePlacesById";
import { NormalUserRepository } from "@infra/db/mongodb/repositories/NormalUserRepository";

export const makeGetFavouritePlacesById = (): GetFavouritePlacesByIdInterface => {
    const normalUserRepository = new NormalUserRepository();

    return new GetFavouritePlacesById(normalUserRepository)
}