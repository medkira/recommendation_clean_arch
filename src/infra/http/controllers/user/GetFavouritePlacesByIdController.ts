import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";
import { HttpResponse } from "@infra/http/interfaces/http/HttpResponse";
import { BaseController } from "../BaseController";
import { PlaceNotFoundError } from "@application/errors/PlaceNotFoundError";
import { notFound, ok } from "@infra/http/helpers/https";
import { GetFavouritePlacesByIdInterface } from "@application/interfaces/use-cases/users/GetFavouritePlacesByIdInterface";

export class GetFavouritePlacesByIdController extends BaseController {
    constructor(private readonly getFavouritePlacesById: GetFavouritePlacesByIdInterface) {
        super();
    }
    async execute(
        httpRequest: GetFavouritePlacesByIdController.Request
    ): Promise<GetFavouritePlacesByIdController.Response> {
        const id = httpRequest.userId!;
        const favouritePlaces = await this.getFavouritePlacesById.execute(id);
        // if (placeOrError instanceof PlaceNotFoundError) {
        //     return notFound(placeOrError);
        // }
        return ok(favouritePlaces);
    }
}

export namespace GetFavouritePlacesByIdController {
    export type Request = HttpRequest<undefined, { id: string }>;
    export type Response = HttpResponse<GetFavouritePlacesByIdInterface.Response>;
}
