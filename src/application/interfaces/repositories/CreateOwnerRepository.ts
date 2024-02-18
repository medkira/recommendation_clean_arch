import { OwnerProps } from "@domain/entities/Owner"


export interface CreateOwnerRepository {
    createOwner(userData: CreateOwnerRepository.Request): Promise<CreateOwnerRepository.Response>
}

export namespace CreateOwnerRepository {
    export type Request = Omit<OwnerProps, 'id' | 'createdAt' | 'updatedAt' | 'isEmailVerified'>
    export type Response = Pick<OwnerProps, 'id'>
}