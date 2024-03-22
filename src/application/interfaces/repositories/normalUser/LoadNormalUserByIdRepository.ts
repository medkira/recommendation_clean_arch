import { NormalUser } from "@domain/entities/NormalUser";

export interface LoadNormalUserByIdRepository {
    loadUserById(
        id: LoadNormalUserByIdRepository.request
    ): Promise<LoadNormalUserByIdRepository.response>
}

export namespace LoadNormalUserByIdRepository {
    export type request = string;
    export type response = NormalUser | null;
}