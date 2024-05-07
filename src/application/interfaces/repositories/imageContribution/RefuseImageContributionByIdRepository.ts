export interface RefuseImageContributionByIdRepository {
    RefuseImageContribution(
        id: RefuseImageContributionByIdRepository.Request
    ): Promise<RefuseImageContributionByIdRepository.Response>;
}

export namespace RefuseImageContributionByIdRepository {
    export type Request = string;
    export type Response = void;
}
