import { Owner } from "@domain/entities/Owner";

export interface LoadOwnerByEmailRepository {
    loadUserByEmail(
        email: LoadOwnerByEmailRepository.request
    ): Promise<LoadOwnerByEmailRepository.response>
}

export namespace LoadOwnerByEmailRepository {
    export type request = string;
    export type response = Owner | null;
}