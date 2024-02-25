import { CreateFoodInterface } from "@application/interfaces/use-cases/foods/CreateFoodInterface";
import { CreateFoodRepository } from "@application/interfaces/repositories/Food/CreateFoodRepository";

export class CreateFood implements CreateFoodInterface {
  constructor(private readonly CreateFoodRepository: CreateFoodRepository) {}
  async execute(
    FoodData: CreateFoodInterface.Request
  ): Promise<CreateFoodInterface.Response> {
    return this.CreateFoodRepository.createFood({
      ...FoodData,
    });
  }
}
