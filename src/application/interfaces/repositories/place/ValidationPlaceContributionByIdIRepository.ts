export interface ValidationPlaceContributionByIdRepository {
    validationPlaceContributionById(
        id: ValidationPlaceContributionByIdRepository.Request
    ): Promise<ValidationPlaceContributionByIdRepository.Response>;
}

export namespace ValidationPlaceContributionByIdRepository {
    export type Request = string;
    export type Response = void;
}
