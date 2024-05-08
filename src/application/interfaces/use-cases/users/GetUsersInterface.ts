import { UseCase } from "../UseCase.js";
import { UserRole } from "@domain/entities/User.js";
import { NormalUser } from "@domain/entities/NormalUser.js";

export interface GetUsersInterface extends UseCase<GetUsersInterface.Request, GetUsersInterface.Response> {
    execute(params: GetUsersInterface.Request): Promise<GetUsersInterface.Response>
}

export namespace GetUsersInterface {
    export type Request = { page?: number, role?: UserRole, isEmailVerified?: boolean };
    export type Response = { data: NormalUser[], page: number, total: number, totalPages: number };
}