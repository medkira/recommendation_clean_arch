import { ForbiddenError } from "@application/errors/ForbiddenError";
import { CreateFoodInterface } from "@application/interfaces/use-cases/foods/CreateFoodInterface";
import { UserRole } from "@domain/entities/User";
import { forbidden, notFound, ok } from "@infra/http/helpers/https";
import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";
import { HttpResponse } from "@infra/http/interfaces/http/HttpResponse";
import { Validation } from "@infra/http/interfaces/validation/validations";
import { BaseController } from "../BaseController";
import { GetPlaceByIdInterface } from "@application/interfaces/use-cases/places/GetPlaceByIdInterface";
import { GetMenuByIdInterface } from "@application/interfaces/use-cases/menu/GetMenuByIdInterface";
import { PlaceNotFoundError } from "@application/errors/PlaceNotFoundError";

export class CreateFoodController extends BaseController {
  constructor(
    private readonly createFoodValidation: Validation,
    private readonly getPlaceById: GetPlaceByIdInterface,
    private readonly createFood: CreateFoodInterface
  ) {
    super();
  }

  async execute(
    httpRequest: CreateFoodController.Request
  ): Promise<CreateFoodController.Response> {
    const user_role = httpRequest.userRole!;
    if (user_role != UserRole.OWNER && user_role != UserRole.ADMIN) {
      return forbidden(new ForbiddenError());
    }

    const { name, price, food_type, place_id, foodImage = httpRequest.files?.foodImage } = httpRequest.body!;
    const placeOrError = await this.getPlaceById.execute(place_id);

    if (placeOrError instanceof PlaceNotFoundError) {
      return notFound(placeOrError);
    }
    const foodId = await this.createFood.execute({
      foodImage,
      place_id,
      name,
      price,
      food_type,
    });
    return ok({ foodId, message: "Food created successfuly!" });
  }
}

export namespace CreateFoodController {
  export type Request = HttpRequest<CreateFoodInterface.Request>;

  export type Response = HttpResponse<{ FoodId: string } | ForbiddenError>;
}
