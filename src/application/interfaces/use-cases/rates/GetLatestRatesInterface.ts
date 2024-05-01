import { UseCase } from "../UseCase";
import { Rate } from "@domain/entities/Rates";

export interface GetLatesRatesInterface extends UseCase<GetLatesRatesInterface.Request, GetLatesRatesInterface.Response> {
    execute(params: GetLatesRatesInterface.Request): Promise<GetLatesRatesInterface.Response>;
}

export namespace GetLatesRatesInterface {
    export type Request = { page?: number, rated_id?: string };
    export type Response = { data: Rate[], page: number, total: number, totalPages: number };
}