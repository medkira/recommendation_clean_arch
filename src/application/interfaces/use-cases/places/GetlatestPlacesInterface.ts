import { Place, placeTypes } from "@domain/entities/Place";
import { UseCase } from "../UseCase";

export interface GetLatesPlacesInterface extends UseCase<GetLatesPlacesInterface.Request, GetLatesPlacesInterface.Response> {
    execute(params: GetLatesPlacesInterface.Request): Promise<GetLatesPlacesInterface.Response>;
}

export namespace GetLatesPlacesInterface {
    export type Request = { page?: number, type?: placeTypes, location: string, is_verified: boolean, user_id: string };
    export type Response = { data: Place[], page: number, total: number, totalPages: number };
}