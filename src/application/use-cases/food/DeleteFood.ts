import { DeleteFoodRepository } from "@application/interfaces/repositories/Food/DeleteFoodRepository";
import { DeleteFoodInterface } from "@application/interfaces/use-cases/foods/DeleteFoodInterface";

export class DeleteFood implements DeleteFoodInterface {
  constructor(private readonly deleteFoodRepository: DeleteFoodRepository) {}
  execute(
    FoodId: DeleteFoodInterface.Request
  ): Promise<DeleteFoodInterface.Response> {
    return this.deleteFoodRepository.deleteFood(FoodId);
  }
}
