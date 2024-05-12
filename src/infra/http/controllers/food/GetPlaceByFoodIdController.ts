import { GetFoodByIdInterface } from "@application/interfaces/use-cases/foods/GetFoodByIdInterface";
import { GetPlaceByIdInterface } from "@application/interfaces/use-cases/places/GetPlaceByIdInterface";
import { GetPlaceByFoodId } from "@application/use-cases/food/GetPlaceByFoodId";
import { BaseController } from "../BaseController";
import { GetPlaceByFoodIdInterface } from "@application/interfaces/use-cases/foods/GetPlaceByFoodIdInterface";
import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";
import { HttpResponse } from "@infra/http/interfaces/http/HttpResponse";
import { PlaceNotFoundError } from "@application/errors/PlaceNotFoundError";
import { notFound, ok } from "@infra/http/helpers/https";

export class GetPlaceByFoodIdController extends BaseController {
  constructor(
    private readonly getPlaceByFoodIdInterface: GetPlaceByFoodIdInterface
  ) {
    super();
  }

  async execute(
    httpRequest: GetPlaceByFoodIdController.Request
  ): Promise<GetPlaceByFoodIdController.Response> {
    const { id } = httpRequest.params!;
    // console.log("this is the id",id)
    const PlaceOrError = await this.getPlaceByFoodIdInterface.execute(id);
    if (PlaceOrError instanceof PlaceNotFoundError) {
      return notFound(PlaceOrError);
    }
    return ok(PlaceOrError);
  }
}
export namespace GetPlaceByFoodIdController {
  export type Request = HttpRequest<undefined, { id: string }>;
  export type Response = HttpResponse<GetPlaceByFoodIdInterface.Response>;
}
