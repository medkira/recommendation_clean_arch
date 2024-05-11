import { FoodNotFoundError } from "@application/errors/FoodNotFoundError";
import { GetFoodByIdInterface } from "@application/interfaces/use-cases/foods/GetFoodByIdInterface";
import { GetPlaceByFoodIdInterface } from "@application/interfaces/use-cases/foods/GetPlaceByFoodIdInterface";
import { UpdateFoodInterface } from "@application/interfaces/use-cases/foods/UpdateFoodInterface";
import { GetPlaceByFoodId } from "@application/use-cases/food/GetPlaceByFoodId";
import { Food } from "@domain/entities/Food";
import { PermissionError } from "@infra/http/errors/PermissionError";
import { notFound, forbidden, ok } from "@infra/http/helpers/https";
import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";
import { HttpResponse } from "@infra/http/interfaces/http/HttpResponse";
import { Validation } from "@infra/http/interfaces/validation/validations";
import { BaseController } from "../BaseController";






export class UpdateFoodController extends BaseController {
  constructor(
    private readonly UpdateFoodValidation: Validation,
    private readonly getFoodById: GetFoodByIdInterface,
    private readonly updateFood: UpdateFoodInterface,
    private readonly getPlaceByFoodId: GetPlaceByFoodIdInterface,
  ) {
    super(UpdateFoodValidation);
  }

  async execute(
    httpRequest: UpdateFoodController.Request
  ): Promise<UpdateFoodController.Response> {
    const user_id = httpRequest.userId!;
    const { name, price, food_type, foodImage = httpRequest.files?.foodImage } = httpRequest.body!;
    const { id } = httpRequest.params!;
    const foodOrError = await this.getFoodById.execute(id);
    if (foodOrError instanceof Error) {
      return notFound(foodOrError);
    }
    const place = await this.getPlaceByFoodId.execute(foodOrError.id)
    if (!(place instanceof Error)) {
      if (place.user_id !== user_id) {
        return forbidden(new PermissionError());
      }
    }

    const updatedFood = await this.updateFood.execute({
      FoodId: id,
      FoodData: { name, price, food_type, foodImage },
    });

    return ok(updatedFood);
  }
}

export namespace UpdateFoodController {
  export type Request = HttpRequest<
    UpdateFoodInterface.FoodDataType,
    { id: string }
  >;
  export type Response = HttpResponse<
    Food | FoodNotFoundError | PermissionError
  >;
}
