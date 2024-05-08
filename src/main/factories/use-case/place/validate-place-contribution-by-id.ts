import { ValidationPlaceContributionByIdInterface } from "@application/interfaces/use-cases/places/ValidationPlaceContributionByIdInterface";
import { ValidationPlaceContributionById } from "@application/use-cases/place/ValidationPlaceContributionById";
import { NormalUserRepository } from "@infra/db/mongodb/repositories/NormalUserRepository";
import { PlaceRepository } from "@infra/db/mongodb/repositories/PlaceRepository";

export const makeValidatePlaceContributionById = (): ValidationPlaceContributionByIdInterface => {
    const placeRepository = new PlaceRepository();
    const normalUserRepository = new NormalUserRepository();
    return new ValidationPlaceContributionById(placeRepository, placeRepository, normalUserRepository)
}