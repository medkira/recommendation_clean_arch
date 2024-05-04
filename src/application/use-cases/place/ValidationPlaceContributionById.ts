import { PlaceNotFoundError } from "@application/errors/PlaceNotFoundError";
import { GetPlaceByIdRepository } from "@application/interfaces/repositories/place/GetPlaceByIdRepository";
import { ValidationPlaceContributionByIdRepository } from "@application/interfaces/repositories/place/ValidationPlaceContributionByIdIRepository";
import { ValidationPlaceContributionByIdInterface } from "@application/interfaces/use-cases/places/ValidationPlaceContributionByIdInterface";


export class ValidationPlaceContributionById implements ValidationPlaceContributionByIdInterface {
    constructor(
        private readonly getPlaceByIdRepository: GetPlaceByIdRepository,
        private readonly validationPlaceContributionByIdRepository: ValidationPlaceContributionByIdRepository,
    ) { }

    async execute(placeId: string): Promise<ValidationPlaceContributionByIdInterface.Response> {
        const place = await this.getPlaceByIdRepository.getPlaceById(placeId);
        if (!place) {
            return new PlaceNotFoundError();
        }


        await this.validationPlaceContributionByIdRepository.validationPlaceContributionById(placeId);

    }
}