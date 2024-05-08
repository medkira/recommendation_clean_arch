export interface DeleteUserRepository {
    deletUser(
        userId: DeleteUserRepository.Request
    ): Promise<DeleteUserRepository.Response>;
}

export namespace DeleteUserRepository {
    export type Request = string;
    export type Response = void;
}
