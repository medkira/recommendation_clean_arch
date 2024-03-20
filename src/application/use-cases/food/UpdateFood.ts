import { UpdateFoodInterface } from "@application/interfaces/use-cases/foods/UpdateFoodInterface";
import { UpdateFoodRepository } from "@application/interfaces/repositories/Food/UpdateFoodRepository";




export class UpdateFood implements UpdateFoodInterface {
    constructor(private readonly UpdateFoodRepository: UpdateFoodRepository) {}
    execute(
      params: UpdateFoodInterface.Request
    ): Promise<UpdateFoodInterface.Response> {
      return this.UpdateFoodRepository.updateFood(params);
    }
  }
  