import { CreatePlaceInterface } from "@application/interfaces/use-cases/places/CreatePlaceInterface";
import { BaseController } from "../BaseController";
import { Validation } from "@infra/http/validation/interface/Validation";
import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";
import { ok } from "@infra/http/helpers/https";
import { HttpResponse } from "@infra/http/interfaces/http/HttpResponse";

export class CreatePlaceController extends BaseController {
  constructor(
    private readonly createPlaceValidation: Validation,
    private readonly createPlace: CreatePlaceInterface
  ) {
    super(createPlaceValidation);
  }

  async execute(
    httpRequest: CreatePlaceController.Request
  ): Promise<CreatePlaceController.Response> {
    const user_id = httpRequest.userId!;
    const { name, type, location, description, url } = httpRequest.body!;

    const placeId = await this.createPlace.execute({
      user_id,
      name,
      type,
      location,
      description,
      url,
    });
    return ok({ placeId, message: "place created successfuly!" });
  }
}

export namespace CreatePlaceController {
  export type Request = HttpRequest<
    Omit<CreatePlaceInterface.Request, "user_id">
  >;
  export type Response = HttpResponse<{ PlaceId: string }>;
}
