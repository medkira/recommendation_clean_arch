import { UseCase } from "../UseCase";

export interface RemovePlaceFromFavouriteInterface extends UseCase<RemovePlaceFromFavouriteInterface.Request, RemovePlaceFromFavouriteInterface.Response> {
    execute(params: RemovePlaceFromFavouriteInterface.Request): Promise<RemovePlaceFromFavouriteInterface.Response>;
}

export namespace RemovePlaceFromFavouriteInterface {
    export type Request = { userId: string, placeId: string }
    export type Response = void;
}