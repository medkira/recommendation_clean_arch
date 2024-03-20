import { FoodNotFoundError } from "@application/errors/FoodNotFoundError";
import { MenuNotFoundError } from "@application/errors/MenuNotFoundError";
import { GetFoodByIdRepository } from "@application/interfaces/repositories/Food/GetFoodByIdRepository";
import { GetMenuByFoodIdInterface } from "@application/interfaces/use-cases/foods/GetMenuByFoodIdInterface";
import { GetMenuByIdRepository } from "@application/interfaces/repositories/Menu/GetMenuByIdRepository";

export class GetMenuByFoodId implements GetMenuByFoodIdInterface {
  constructor(
    private readonly getFoodByIdRepository: GetFoodByIdRepository,
    private readonly GetMenuByIdRepository: GetMenuByIdRepository
  ) {}

  async execute(
    foodId: GetMenuByFoodIdInterface.Request
  ): Promise<GetMenuByFoodIdInterface.Response> {
    const food = await this.getFoodByIdRepository.getFoodById(foodId);
    if (!food) {
      return new FoodNotFoundError();
    }
    const MenuId = food.menu_id;
    const menu = await this.GetMenuByIdRepository.getMenuById(MenuId);
    if (!menu) {
      return new MenuNotFoundError();
    }
    return menu;
  }
}
