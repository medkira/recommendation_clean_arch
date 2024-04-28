export interface GetGoogleUserByIdRepository {
    getGoogleUserById(
        id: GetGoogleUserByIdRepository.requet
    ): Promise<GetGoogleUserByIdRepository.response>;
}

export namespace GetGoogleUserByIdRepository {
    export type requet = string;
    export type response = any;
}