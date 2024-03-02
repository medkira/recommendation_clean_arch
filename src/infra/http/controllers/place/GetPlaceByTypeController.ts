import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";
import { HttpResponse } from "@infra/http/interfaces/http/HttpResponse";
import { BaseController } from "../BaseController";
import { GetPlaceByTypeInterface } from "@application/interfaces/use-cases/places/GetPlaceByTypeInterface";
import { PlaceNotFoundError } from "@application/errors/PlaceNotFoundError";
import { notFound, ok } from "@infra/http/helpers/https";

export class GetPlaceByTypeController extends BaseController {
  constructor(private readonly getPlaceByType: GetPlaceByTypeInterface) {
    super();
  }
  async execute(
    httpRequest: GetPlaceByTypeController.Request
  ): Promise<GetPlaceByTypeController.Response> {
    const { type } = httpRequest.params!;

    const placeOrError = await this.getPlaceByType.execute({ type });


    if (placeOrError instanceof PlaceNotFoundError) {
      return notFound(placeOrError);
    }
    return ok(placeOrError);
  }
}

export namespace GetPlaceByTypeController {
  export type Request = HttpRequest<
    undefined, GetPlaceByTypeInterface.Request
  >;
  export type Response = HttpResponse<
    GetPlaceByTypeInterface.Response | PlaceNotFoundError
  >;
}
