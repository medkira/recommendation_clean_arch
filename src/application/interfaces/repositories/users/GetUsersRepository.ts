import { NormalUser } from "@domain/entities/NormalUser";
import { Place, placeTypes } from "@domain/entities/Place";

export interface GetUsersRepository {
    getUsers(params: GetUsersRepository.Request): Promise<GetUsersRepository.Response>;
}

export namespace GetUsersRepository {
    export type Request = { page: number, paginationLimit: number, query: any };
    export type Response = { data: NormalUser[], page: number, total: number, totalPages: number };
}