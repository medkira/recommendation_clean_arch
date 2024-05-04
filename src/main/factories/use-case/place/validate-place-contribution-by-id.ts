import { ValidationPlaceContributionByIdInterface } from "@application/interfaces/use-cases/places/ValidationPlaceContributionByIdInterface";
import { ValidationPlaceContributionById } from "@application/use-cases/place/ValidationPlaceContributionById";
import { PlaceRepository } from "@infra/db/mongodb/repositories/PlaceRepository";

export const makeValidatePlaceContributionById = (): ValidationPlaceContributionByIdInterface => {
    const placeRepository = new PlaceRepository();

    return new ValidationPlaceContributionById(placeRepository, placeRepository)
}