import { UseCase } from "../UseCase";
export interface AddPlaceToFavouriteInterface extends UseCase<AddPlaceToFavouriteInterface.Request, AddPlaceToFavouriteInterface.Response> {
    execute(params: AddPlaceToFavouriteInterface.Request): Promise<AddPlaceToFavouriteInterface.Response>;
}

export namespace AddPlaceToFavouriteInterface {
    export type Request = { userId: string, placeId: string }
    export type Response = void;
}