import { Validation } from "@infra/http/validation/interface/Validation";
import { BaseController } from "../BaseController";
import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";
import { HttpResponse } from "@infra/http/interfaces/http/HttpResponse";
import { GetPlaceByIdInterface } from "@application/interfaces/use-cases/places/GetPlaceByIdInterface";
import { CreateMenuInterface } from "@application/interfaces/use-cases/menu/CreateMenuInterface";
import { GetFoodByIdInterface } from "@application/interfaces/use-cases/foods/GetFoodByIdInterface";
import { PlaceNotFoundError } from "@application/errors/PlaceNotFoundError";
import { FoodNotFoundError } from "@application/errors/FoodNotFoundError";
import { ok, notFound } from "@infra/http/helpers/https";

export class CreateMenuController extends BaseController {
  constructor(
    private readonly createMenuValidation: Validation,
    private readonly getPlaceById: GetPlaceByIdInterface,
    private readonly getFoodsById: GetFoodByIdInterface,
    private readonly createMenu: CreateMenuInterface
  ) {
    super(createMenuValidation);
  }

  async execute(
    httpRequest: CreateMenuController.Request
  ): Promise<CreateMenuController.Response> {
    const { place_id, foods_id } = httpRequest.body!;

    const placeOrError = await this.getPlaceById.execute({ id: place_id });
    if (placeOrError instanceof PlaceNotFoundError) {
      return notFound(placeOrError);
    }

    for (let food_id in foods_id) {
      let food = await this.getFoodsById.execute({ id: food_id });
      if (food instanceof FoodNotFoundError) {
        return notFound(food);
      }
    }

    const id = await this.createMenu.execute({ place_id, foods_id });

    return ok({ id });
  }
}

export namespace CreateMenuController {
  export type Request = HttpRequest<CreateMenuInterface.Request>;
  export type Response = HttpResponse<
    { MenuId: string } | PlaceNotFoundError | FoodNotFoundError
  >;
}
