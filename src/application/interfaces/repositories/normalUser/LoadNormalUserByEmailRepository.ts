import { NormalUser } from "@domain/entities/NormalUser";

export interface LoadNormalUserByEmailRepository {
    loadUserByEmail(
        email: LoadNormalUserByEmailRepository.request
    ): Promise<LoadNormalUserByEmailRepository.response>
}

export namespace LoadNormalUserByEmailRepository {
    export type request = string;
    export type response = NormalUser | null;
}