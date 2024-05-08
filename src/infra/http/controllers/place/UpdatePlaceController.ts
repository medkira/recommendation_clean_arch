import { UpdatePlaceInterface } from "@application/interfaces/use-cases/places/UpdatePlaceInterface";
import { BaseController } from "../BaseController";
import { GetPlaceByIdInterface } from "@application/interfaces/use-cases/places/GetPlaceByIdInterface";
import { Validation } from "@infra/http/validation/interface/Validation";
import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";
import { HttpResponse } from "@infra/http/interfaces/http/HttpResponse";
import { Place, PlaceProps } from "@domain/entities/Place";
import { forbidden, notFound, ok } from "@infra/http/helpers/https";
import { PlaceNotFoundError } from "@application/errors/PlaceNotFoundError";
import { PermissionError } from "@infra/http/errors/PermissionError";

export class UpdatePlaceController extends BaseController {
  constructor(
    private readonly UpdatePlaceValidation: Validation,
    private readonly getPlaceById: GetPlaceByIdInterface,
    private readonly updatePlace: UpdatePlaceInterface
  ) {
    super();
  }

  async execute(
    httpRequest: UpdatePlaceController.Request
  ): Promise<UpdatePlaceController.Response> {
    const user_id = httpRequest.userId!;
    const { name, type, location, description, url, is_verified, placeImage = httpRequest.files?.placeImage } = httpRequest.body!;
    const { id } = httpRequest.params!;
    const placeOrError = await this.getPlaceById.execute(id);
    if (placeOrError instanceof Error) {
      return notFound(placeOrError);
    }
    // if (placeOrError!.user_id !== user_id) {
    //   return forbidden(new PermissionError());
    // }

    const updatedPlace = await this.updatePlace.execute({
      placeId: id,
      placeData: { name, type, location, description, url, is_verified, placeImage },
    });

    return ok(updatedPlace);
  }
}

export namespace UpdatePlaceController {
  export type Request = HttpRequest<
    UpdatePlaceInterface.placeDataType,
    { id: string }
  >;
  export type Response = HttpResponse<
    Place | PlaceNotFoundError | PermissionError
  >;
}
