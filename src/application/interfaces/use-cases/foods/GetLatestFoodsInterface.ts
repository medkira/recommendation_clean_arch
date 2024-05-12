import { Place, placeTypes } from "@domain/entities/Place";
import { UseCase } from "../UseCase";
import { Food, foodTypes } from "@domain/entities/Food";

export interface GetLatesFoodsInterface extends UseCase<GetLatesFoodsInterface.Request, GetLatesFoodsInterface.Response> {
    execute(params: GetLatesFoodsInterface.Request): Promise<GetLatesFoodsInterface.Response>;
}

export namespace GetLatesFoodsInterface {
    export type Request = { paginationLimit?: number, page?: number, type?: foodTypes, is_verified?: boolean, user_id?: string, price: number, place_id: string };
    export type Response = { data: Food[], page: number, total: number, totalPages: number };
}