export interface UpdateOwnerPasswordRepository {
    updateOwnerPassword(params: UpdateOwnerPasswordRepository.Request): Promise<UpdateOwnerPasswordRepository.Response>;
}

export namespace UpdateOwnerPasswordRepository {
    export type Request = { id: string, password: string };
    export type Response = { id: string };
} 