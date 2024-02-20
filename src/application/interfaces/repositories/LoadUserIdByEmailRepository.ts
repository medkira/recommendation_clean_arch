import { NormalUserProps } from "@domain/entities/NormalUser";
import { OwnerProps } from "@domain/entities/Owner";

export interface LoadUserIdByEmailRepository {
    loadUserIdByEmail(
        email: LoadUserIdByEmailRepository.request
    ): Promise<LoadUserIdByEmailRepository.response>
}

export namespace LoadUserIdByEmailRepository {
    export type request = string;
    export type response = Pick<NormalUserProps, 'id'> | Pick<OwnerProps, 'id'> | null;
}