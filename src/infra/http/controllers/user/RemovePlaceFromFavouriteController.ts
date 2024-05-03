import { BaseController } from "../BaseController";
import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";
import { HttpResponse } from "@infra/http/interfaces/http/HttpResponse";
import { notFound, ok } from "@infra/http/helpers/https";
import { PlaceNotFoundError } from "@application/errors/PlaceNotFoundError";
import { GetPlaceByIdInterface } from "@application/interfaces/use-cases/places/GetPlaceByIdInterface";
import { RemovePlaceFromFavouriteInterface } from "@application/interfaces/use-cases/users/RemovePlaceFromFavouriteInterface";


export class RemovePlaceFromFavouriteController extends BaseController {

    constructor(
        private readonly getPlaceById: GetPlaceByIdInterface,
        private readonly removePLaceFromFavourite: RemovePlaceFromFavouriteInterface,

    ) {
        super();
    }

    async execute(httpRequest: RemovePlaceFromFavouriteControllert.Request): Promise<RemovePlaceFromFavouriteControllert.Response> {
        const { placeId } = httpRequest.body!;
        const userId = httpRequest.userId!;

        const getPlaceByIdOrError = await this.getPlaceById.execute(placeId)
        if (getPlaceByIdOrError instanceof PlaceNotFoundError) {
            return notFound(getPlaceByIdOrError);
        }

        await this.removePLaceFromFavourite.execute({ placeId, userId })

        return ok({ "message": "Place removed successfully" });
    }

}


export namespace RemovePlaceFromFavouriteControllert {
    export type Request = HttpRequest<{ placeId: string }>;
    export type Response = HttpResponse<undefined | PlaceNotFoundError>

}