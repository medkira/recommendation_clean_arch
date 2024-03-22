import { Owner } from "@domain/entities/Owner";

export interface LoadOwnerByIdlRepository {
    loadUserById(
        id: LoadOwnerByIdlRepository.request
    ): Promise<LoadOwnerByIdlRepository.response>
}

export namespace LoadOwnerByIdlRepository {
    export type request = string;
    export type response = Owner | null;
}