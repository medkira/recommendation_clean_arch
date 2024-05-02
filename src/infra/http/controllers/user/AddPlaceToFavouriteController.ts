import { AddPlaceToFavouriteInterface } from "@application/interfaces/use-cases/users/AddPlaceToFavouriteInterface";
import { BaseController } from "../BaseController";
import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";
import { HttpResponse } from "@infra/http/interfaces/http/HttpResponse";
import { notFound, ok } from "@infra/http/helpers/https";
import { PlaceNotFoundError } from "@application/errors/PlaceNotFoundError";
import { GetPlaceByIdInterface } from "@application/interfaces/use-cases/places/GetPlaceByIdInterface";


export class AddPlaceToFavouriteController extends BaseController {

    constructor(
        private readonly getPlaceById: GetPlaceByIdInterface,
        private readonly addPlaceToFavourite: AddPlaceToFavouriteInterface,

    ) {
        super();
    }

    async execute(httpRequest: AddPlaceToFavouriteControllert.Request): Promise<AddPlaceToFavouriteControllert.Response> {
        const { placeId } = httpRequest.body!;
        const userId = httpRequest.userId!;

        const getPlaceByIdOrError = await this.getPlaceById.execute(placeId)
        if (getPlaceByIdOrError instanceof PlaceNotFoundError) {
            return notFound(getPlaceByIdOrError);
        }

        await this.addPlaceToFavourite.execute({ placeId, userId })

        return ok({ "message": "Place Aded successfully" });
    }

}


export namespace AddPlaceToFavouriteControllert {
    export type Request = HttpRequest<{ placeId: string }>;
    export type Response = HttpResponse<undefined | PlaceNotFoundError>

}