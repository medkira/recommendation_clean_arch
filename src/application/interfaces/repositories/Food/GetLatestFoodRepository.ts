import { Food } from "@domain/entities/Food";

export interface GetLatestFoodsRepository {
    getLatestFoods(params: GetLatestFoodsRepository.Request): Promise<GetLatestFoodsRepository.Response>;
}

export namespace GetLatestFoodsRepository {
    export type Request = { page: number, paginationLimit: number, query: any };
    export type Response = { data: Food[], page: number, total: number, totalPages: number };
}