import { UserRole } from "@domain/entities/User";

export interface UpdateUserRoleByIdRepository {
    updateUserRole(params: UpdateUserRoleByIdRepository.Request): Promise<UpdateUserRoleByIdRepository.Response>;
}

export namespace UpdateUserRoleByIdRepository {
    export type Request = { id: string, role: UserRole };
    export type Response = void;
} 