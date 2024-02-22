import { Owner, OwnerProps } from "@domain/entities/Owner"


export interface CreateOwnerRepository {
    createOwner(userData: CreateOwnerRepository.Request): Promise<CreateOwnerRepository.Response>
}

export namespace CreateOwnerRepository {
    export type Request = Omit<Owner, 'id' | 'createdAt' | 'updatedAt' | 'isEmailVerified'>;
    // export type Request = Omit<OwnerProps, 'id' | 'createdAt' | 'updatedAt'>;
    export type Response = Pick<Owner, 'id'>;
}