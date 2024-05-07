import { NormalUserProps } from "@domain/entities/NormalUser";


export interface CreateNormalUserRepository {
    createNormalUser(userData: CreateNormalUserRepository.Request): Promise<CreateNormalUserRepository.Response>
}

export namespace CreateNormalUserRepository {
    export type Request = Omit<NormalUserProps, 'id' | 'createdAt' | 'updatedAt' | 'isEmailVerified' | 'favouritePlaces' | 'isItOwner'>
    export type Response = Pick<NormalUserProps, 'id'>;
}