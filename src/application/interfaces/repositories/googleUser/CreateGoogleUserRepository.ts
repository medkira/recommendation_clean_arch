import { GoogleUser } from "@domain/entities/GoogleUser";



export interface CreateGoogleUserRepository {
    createGoogleUser(userData: CreateGoogleUserRepository.Request): Promise<CreateGoogleUserRepository.Response>
}

export namespace CreateGoogleUserRepository {
    export type Request = Omit<GoogleUser, 'id' | 'role'>;
    // export type Request = Omit<GoogleUserProps, 'id' | 'createdAt' | 'updatedAt'>;
    export type Response = Pick<GoogleUser, 'id'>;
}