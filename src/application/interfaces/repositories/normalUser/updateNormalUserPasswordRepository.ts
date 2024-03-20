export interface UpdateNormalUserPasswordRepository {
    updateNormalUserPassword(params: UpdateNormalUserPasswordRepository.Request): Promise<UpdateNormalUserPasswordRepository.Response>;
}

export namespace UpdateNormalUserPasswordRepository {
    export type Request = { id: string, password: string };
    export type Response = { id: string };
} 