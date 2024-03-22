import { Totp, TotpProps } from "@domain/entities/totp";

export interface CreateTotpRepository {
    createTotp(totp: CreateTotpRepository.Request): Promise<CreateTotpRepository.Response>;
}


export namespace CreateTotpRepository {
    export type Request = Omit<TotpProps, 'createdAt' | 'id'>;
    export type Response = Pick<TotpProps, 'id'>;
}