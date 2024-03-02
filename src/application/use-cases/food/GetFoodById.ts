import { FoodNotFoundError } from "@application/errors/FoodNotFoundError";
import { GetFoodByIdInterface } from "@application/interfaces/use-cases/foods/GetFoodByIdInterface";
import { GetFoodByIdRepository } from "@application/interfaces/repositories/Food/GetFoodByIdRepository";

export class GetFoodById implements GetFoodByIdInterface {
  constructor(private readonly GetFoodByIdRepository: GetFoodByIdRepository) { }
  async execute(
    FoodId: GetFoodByIdInterface.Request
  ): Promise<GetFoodByIdInterface.Response> {
    const Food = await this.GetFoodByIdRepository.getFoodById(FoodId);
    if (!Food) {
      return new FoodNotFoundError();
    }
    return Food;
  }
}
