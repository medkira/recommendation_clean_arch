import { Place } from "@domain/entities/Place.js";
import { UseCase } from "../UseCase.js";

export interface GetFavouritePlacesByIdInterface extends UseCase<GetFavouritePlacesByIdInterface.Request, GetFavouritePlacesByIdInterface.Response> {
    execute(id: GetFavouritePlacesByIdInterface.Request): Promise<GetFavouritePlacesByIdInterface.Response>
}

export namespace GetFavouritePlacesByIdInterface {
    export type Request = string;
    export type Response = Place[] | null;
}