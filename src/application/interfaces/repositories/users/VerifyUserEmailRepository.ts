export interface VerfifyUserEmailByIdRepository {
    verfifyUserEmailById(
        id: VerfifyUserEmailByIdRepository.Request
    ): Promise<VerfifyUserEmailByIdRepository.Response>
}

export namespace VerfifyUserEmailByIdRepository {
    export type Request = string
    export type Response = void;
}