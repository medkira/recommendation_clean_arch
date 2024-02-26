import { GetFoodByIdRepository } from "@application/interfaces/repositories/Food/GetFoodByIdRepository";
import foodModel from "../models/food.model";
import { isValidObjectId, mapDocument, objectIdToString } from "../helpers/mappers";
import { CreateFoodRepository } from "@application/interfaces/repositories/Food/CreateFoodRepository";

export class FoodRepository
  implements GetFoodByIdRepository, CreateFoodRepository {

  async createFood(
    FoodData: CreateFoodRepository.Request
  ): Promise<CreateFoodRepository.Response> {
    const food = new foodModel({
      ...FoodData,
    });
    const savedFood = await food.save();
    const foodId = objectIdToString(savedFood._id);
    return foodId;
  }

  async getFoodById(
    FoodId: GetFoodByIdRepository.Request
  ): Promise<GetFoodByIdRepository.Response> {

    if (!isValidObjectId(FoodId)) {
      return null;
    }

    const rawFood = await foodModel.findById(FoodId);
    return rawFood && mapDocument(rawFood);
  }
}
