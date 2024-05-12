import { FoodNotFoundError } from "@application/errors/FoodNotFoundError";
import { DeleteFoodInterface } from "@application/interfaces/use-cases/foods/DeleteFoodInterface";
import { GetFoodByIdInterface } from "@application/interfaces/use-cases/foods/GetFoodByIdInterface";
import { PermissionError } from "@infra/http/errors/PermissionError";
import { forbidden, notFound, ok } from "@infra/http/helpers/https";
import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";
import { HttpResponse } from "@infra/http/interfaces/http/HttpResponse";
import { BaseController } from "../BaseController";
import { ForbiddenError } from "@application/errors/ForbiddenError";
import { UserRole } from "@domain/entities/User";
import { GetPlaceByFoodId } from "@application/use-cases/food/GetPlaceByFoodId";
import { PlaceNotFoundError } from "@application/errors/PlaceNotFoundError";
import { GetPlaceByFoodIdInterface } from "@application/interfaces/use-cases/foods/GetPlaceByFoodIdInterface";





export class DeleteFoodController extends BaseController {
  constructor(
    private readonly getFoodById: GetFoodByIdInterface,
    private readonly deleteFoodInterface: DeleteFoodInterface,
    private readonly getplaceByFoodId: GetPlaceByFoodIdInterface,
  ) {
    super();
  }

  async execute(
    httpRequest: DeleteFoodController.Request
  ): Promise<DeleteFoodController.Response> {
    const { id } = httpRequest.params!;
    const user_id = httpRequest.userId!;
    // console.log("user id",user_id)

    const foodOrError = await this.getFoodById.execute(id);
    if (foodOrError instanceof Error) {
      return notFound(foodOrError);
    }
    const place = await this.getplaceByFoodId.execute(foodOrError.id)
    if (!(place instanceof Error)) {
      if (place.user_id !== user_id) {
        return forbidden(new PermissionError());
      }
    }

    await this.deleteFoodInterface.execute(id);

    return ok({ message: "Food deleted succcessfuly!" });
  }
}

export namespace DeleteFoodController {
  export type Request = HttpRequest<DeleteFoodInterface.Request>;
  export type Response = HttpResponse<
    undefined | FoodNotFoundError | PermissionError | PlaceNotFoundError
  >;
}
