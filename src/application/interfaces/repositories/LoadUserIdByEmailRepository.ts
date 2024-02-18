import { NormalUser, NormalUserProps } from "@domain/entities/NormalUser";
import { Owner, OwnerProps } from "@domain/entities/Owner";
import { UserProps } from "@domain/entities/User";

export interface LoadUserIdByEmailRepository {
    loadUserIdByEmail(
        email: LoadUserIdByEmailRepository.request
    ): Promise<LoadUserIdByEmailRepository.response>
}

export namespace LoadUserIdByEmailRepository {
    export type request = string;
    export type response = Pick<NormalUserProps, 'id'> | Pick<OwnerProps, 'id'> | null;
}