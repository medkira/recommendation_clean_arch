import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";
import { HttpResponse } from "@infra/http/interfaces/http/HttpResponse";
import { BaseController } from "../BaseController";
import { GetPlaceByIdInterface } from "@application/interfaces/use-cases/places/GetPlaceByIdInterface";
import { PlaceNotFoundError } from "@application/errors/PlaceNotFoundError";
import { notFound, ok } from "@infra/http/helpers/https";

export class GetPlaceByIdController extends BaseController {
  constructor(private readonly getPlaceById: GetPlaceByIdInterface) {
    super();
  }
  async execute(
    httpRequest: GetPlaceByIdController.Request
  ): Promise<GetPlaceByIdController.Response> {
    const { id } = httpRequest.params!;
    const placeOrError = await this.getPlaceById.execute(id);
    if (placeOrError instanceof PlaceNotFoundError) {
      return notFound(placeOrError);
    }
    return ok(placeOrError);
  }
}

export namespace GetPlaceByIdController {
  export type Request = HttpRequest<undefined, { id: string }>;
  export type Response = HttpResponse<GetPlaceByIdInterface.Response>;
}
