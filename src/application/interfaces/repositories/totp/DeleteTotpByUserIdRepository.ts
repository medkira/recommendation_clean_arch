import { Totp, TotpProps } from "@domain/entities/totp";

export interface DeleteTotpByUserIdRepository {
    deleteTotp(id: DeleteTotpByUserIdRepository.Request): Promise<DeleteTotpByUserIdRepository.Response>;
}


export namespace DeleteTotpByUserIdRepository {
    export type Request = string;
    export type Response = void;
}