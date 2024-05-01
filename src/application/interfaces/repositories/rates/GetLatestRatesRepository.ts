import { Rate } from "@domain/entities/Rates";

export interface GetLatestRatesRepository {
    getLatestRates(params: GetLatestRatesRepository.Request): Promise<GetLatestRatesRepository.Response>;
}

export namespace GetLatestRatesRepository {
    export type Request = { page: number, paginationLimit: number, query: any };
    export type Response = { data: Rate[], page: number, total: number, totalPages: number };
}