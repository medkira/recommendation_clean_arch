import { CreatePlaceInterface } from "@application/interfaces/use-cases/places/CreatePlaceInterface";
import { BaseController } from "../BaseController";
import { Validation } from "@infra/http/validation/interface/Validation";
import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";
import { forbidden, ok } from "@infra/http/helpers/https";
import { HttpResponse } from "@infra/http/interfaces/http/HttpResponse";
import { UserRole } from "@domain/entities/User";
import { ForbiddenError } from "@application/errors/ForbiddenError";

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
    const user_role = httpRequest.userRole!;

    // if (user_role != UserRole.OWNER && user_role != UserRole.ADMIN) {
    //   return forbidden(new ForbiddenError())
    // }


    const { name, type, location, description, url, is_verified, placeImage = httpRequest.files?.placeImage } = httpRequest.body!;
    const verified = user_role == UserRole.ADMIN;


    const placeId = await this.createPlace.execute({
      is_verified: verified,
      user_id,
      name,
      type,
      location,
      description,
      url,
      placeImage
    });
    return ok({ placeId, message: "place created successfuly!" });
  }
}

export namespace CreatePlaceController {
  export type Request = HttpRequest<
    Omit<CreatePlaceInterface.Request, "user_id">
  >;
  export type Response = HttpResponse<{ PlaceId: string } | ForbiddenError>;
}
