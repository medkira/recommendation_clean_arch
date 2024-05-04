export interface ValidateAddImageContributionRepository {
    validateAddImageContribution(
        id: ValidateAddImageContributionRepository.Request
    ): Promise<ValidateAddImageContributionRepository.Response>;
}

export namespace ValidateAddImageContributionRepository {
    export type Request = string;
    export type Response = void;
}
