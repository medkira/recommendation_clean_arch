import { PlaceNotFoundError } from "@application/errors/PlaceNotFoundError";
import { UpdateUserRoleByIdRepository } from "@application/interfaces/repositories/normalUser/UpdateUserRoleByIdRepository";
import { GetPlaceByIdRepository } from "@application/interfaces/repositories/place/GetPlaceByIdRepository";
import { ValidationPlaceContributionByIdRepository } from "@application/interfaces/repositories/place/ValidationPlaceContributionByIdIRepository";
import { ValidationPlaceContributionByIdInterface } from "@application/interfaces/use-cases/places/ValidationPlaceContributionByIdInterface";
import { UserRole } from "@domain/entities/User";


export class ValidationPlaceContributionById implements ValidationPlaceContributionByIdInterface {
    constructor(
        private readonly getPlaceByIdRepository: GetPlaceByIdRepository,
        private readonly validationPlaceContributionByIdRepository: ValidationPlaceContributionByIdRepository,
        private readonly updateUserRoleByIdRepository: UpdateUserRoleByIdRepository,
    ) { }

    async execute(placeId: string): Promise<ValidationPlaceContributionByIdInterface.Response> {
        const place = await this.getPlaceByIdRepository.getPlaceById(placeId);
        if (!place) {
            return new PlaceNotFoundError();
        }


        await this.validationPlaceContributionByIdRepository.validationPlaceContributionById(placeId);
        await this.updateUserRoleByIdRepository.updateUserRole({ id: place.user_id, role: UserRole.OWNER });
    }
}