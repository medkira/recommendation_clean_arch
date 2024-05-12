import { Validation } from "@infra/http/validation/interface/Validation";
import { BaseController } from "../BaseController";
import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";
import { HttpResponse } from "@infra/http/interfaces/http/HttpResponse";
import { GetPlaceByIdInterface } from "@application/interfaces/use-cases/places/GetPlaceByIdInterface";
import { CreateMenuInterface } from "@application/interfaces/use-cases/menu/CreateMenuInterface";
import { GetFoodByIdInterface } from "@application/interfaces/use-cases/foods/GetFoodByIdInterface";
import { PlaceNotFoundError } from "@application/errors/PlaceNotFoundError";
import { FoodNotFoundError } from "@application/errors/FoodNotFoundError";
import { ok, notFound, forbidden } from "@infra/http/helpers/https";
import { Food } from "@domain/entities/Food";
import { CreateFoodInterface } from "@application/interfaces/use-cases/foods/CreateFoodInterface";
import { UpdateFoodInterface } from "@application/interfaces/use-cases/foods/UpdateFoodInterface";
import { ForbiddenError } from "@application/errors/ForbiddenError";
import { UserRole } from "@domain/entities/User";
import { PermissionError } from "@infra/http/errors/PermissionError";
import { OCRAdapter } from "@infra/utils/OCR-GOOGLE/ocr-adapter";

export class CreateMenuController extends BaseController {
  constructor(
    private readonly createMenuValidation: Validation,
    private readonly getPlaceById: GetPlaceByIdInterface,
    private readonly createMenu: CreateMenuInterface,
    private readonly createFood: CreateFoodInterface,
    private readonly updateFood: UpdateFoodInterface,
    private readonly getFoodById: GetFoodByIdInterface,
    private readonly ocrAdapter: OCRAdapter, // this should be use case..

  ) {
    super();
  }

  async execute(
    httpRequest: CreateMenuController.Request
  ): Promise<CreateMenuController.Response> {
    const { place_id, foods, menuImage = httpRequest.files?.menuImage } = httpRequest.body!;
    const user_role = httpRequest.userRole!;
    if (user_role != UserRole.OWNER && user_role != UserRole.ADMIN) {
      return forbidden(new ForbiddenError());
    }
    const placeOrError = await this.getPlaceById.execute(place_id);

    if (placeOrError instanceof PlaceNotFoundError) {
      return notFound(placeOrError);
    }
    let menu;
    // if (menuImage) {
    // here if the user want to upload a menuImage we hundle here the process of teh image and its 
    // ocr and extract the food data and put it in the create method
    menu = await this.ocrAdapter.imageToJson(menuImage);
    // console.log(menu)
    // }

    let food_ids: string[] = [];

    for (const food of foods ?? menu) {
      let food_id = await this.createFood.execute({ ...food, place_id });

      food_ids.push(food_id);
    }

    const id = await this.createMenu.execute({ place_id, food_ids });


    return ok({ menuId: id, menu });
  }
}

export namespace CreateMenuController {
  // export type Request = HttpRequest<CreateMenuInterface.Request>;
  export type Request = HttpRequest<CreateMenuInterface.Request & {
    place_id: string;
    foods: Pick<Food, "name" | "price" | "food_type">[],
    menuImage: File[]
  }>;

  export type Response = HttpResponse<
    { MenuId: string } | PlaceNotFoundError | FoodNotFoundError | PermissionError
  >;
}


//here i want to add the menuId after its creation to the food but it does'nit work well because i should change the whole logic this is my idea :
// for (const foodId of food_ids) {
//   const foodData = await this.getFoodById.execute(foodId);
//   console.log("from create menu controller", foodData)
//   if (!(foodData instanceof FoodNotFoundError)) {
//     const newFood = await this.updateFood.execute({
//       FoodData: { ...foodData, menu_id: id },
//       FoodId: foodId,
//     });
//     console.log("newFood", newFood);
//   } else {
//     return notFound(foodData);
//   }
// }