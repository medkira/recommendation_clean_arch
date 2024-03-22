import { Totp } from "@domain/entities/totp";

export interface GetTotpByUserIdRepository {
    getTotpByUserId(id: GetTotpByUserIdRepository.Request): Promise<GetTotpByUserIdRepository.Response>;
}


export namespace GetTotpByUserIdRepository {
    export type Request = string;
    export type Response = Totp | null;
}