import { DeletePlaceInterface } from "@application/interfaces/use-cases/places/DeletePlaceInterface";
import { BaseController } from "../BaseController";
import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";
import { HttpResponse } from "@infra/http/interfaces/http/HttpResponse";
import { GetPlaceByIdInterface } from "@application/interfaces/use-cases/places/GetPlaceByIdInterface";
import { forbidden, notFound, ok } from "@infra/http/helpers/https";
import { PlaceNotFoundError } from "@application/errors/PlaceNotFoundError";
import { PermissionError } from "@infra/http/errors/PermissionError";
import { UserRole } from "@domain/entities/User";

export class DeletePlaceController extends BaseController {
  constructor(
    private readonly getplaceById: GetPlaceByIdInterface,
    private readonly deleteplaceInterface: DeletePlaceInterface
  ) {
    super();
  }

  async execute(
    httpRequest: DeletePlaceController.Request
  ): Promise<DeletePlaceController.Response> {
    const role = httpRequest.userRole
    const user_id = httpRequest.userId!;
    const { id } = httpRequest.params!;
    const placeOrError = await this.getplaceById.execute(id);
    if (placeOrError instanceof Error) {
      return notFound(placeOrError);
    }
    if (placeOrError!.user_id !== user_id && role !== UserRole.ADMIN) {
      return forbidden(new PermissionError());
    }

    await this.deleteplaceInterface.execute(id);

    return ok({ message: "place deleted succcessfuly!" });
  }
}

export namespace DeletePlaceController {
  export type Request = HttpRequest<DeletePlaceInterface.Request, undefined>;
  export type Response = HttpResponse<
    undefined | PlaceNotFoundError | PermissionError
  >;
}
