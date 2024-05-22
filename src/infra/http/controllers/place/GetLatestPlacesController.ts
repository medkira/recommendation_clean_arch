import { GetLatesPlacesInterface } from "@application/interfaces/use-cases/places/GetlatestPlacesInterface";
import { BaseController } from "../BaseController";
import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";
import { HttpResponse } from "@infra/http/interfaces/http/HttpResponse";
import { ok } from "@infra/http/helpers/https";

export class GetLatestPlacesController extends BaseController {
  constructor(private readonly getLatestPlaces: GetLatesPlacesInterface) {
    super();
  }

  async execute(
    httpRequest: GetLatestPlacesController.Request
  ): Promise<GetLatestPlacesController.Response> {
    const { page, type, location, is_verified, user_id } = httpRequest.query!;

    const response = await this.getLatestPlaces.execute({
      is_verified,
      page,
      type,
      location,
      user_id
    });
    return ok(response);
  }
}

export namespace GetLatestPlacesController {
  export type Request = HttpRequest<
    undefined,
    undefined,
    GetLatesPlacesInterface.Request
  >;
  export type Response = HttpResponse<GetLatesPlacesInterface.Response>;
}
