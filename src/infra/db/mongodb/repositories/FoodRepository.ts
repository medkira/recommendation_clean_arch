import { GetFoodByIdRepository } from "@application/interfaces/repositories/Food/GetFoodByIdRepository";
import foodModel from "../models/food.model";
import {
  isValidObjectId,
  mapCollection,
  mapDocument,
  objectIdToString,
  stringToObjectId,
} from "../helpers/mappers";
import { CreateFoodRepository } from "@application/interfaces/repositories/Food/CreateFoodRepository";
import { DeleteFoodRepository } from "@application/interfaces/repositories/Food/DeleteFoodRepository";
import { UpdateFoodRepository } from "@application/interfaces/repositories/Food/UpdateFoodRepository";
import { Food } from "@domain/entities/Food";
import { GetLatestFoodsRepository } from "@application/interfaces/repositories/Food/GetLatestFoodRepository";
import { paginateModel } from "../helpers/utils/pagination-util";

export class FoodRepository
  implements
  GetFoodByIdRepository,
  CreateFoodRepository,
  DeleteFoodRepository,
  UpdateFoodRepository,


  GetLatestFoodsRepository {
  async getLatestFoods(params: GetLatestFoodsRepository.Request): Promise<GetLatestFoodsRepository.Response> {
    const rawData = await paginateModel(foodModel, params.page, params.paginationLimit, params.query);
    const transformedData = mapCollection(rawData.data);
    return {
      data: transformedData,
      page: rawData.page,
      total: rawData.total,
      totalPages: rawData.totalPages
    };
  }


  async updateFood(params: UpdateFoodRepository.Request): Promise<Food> {
    let { FoodId, FoodData } = params;
    const rawUpdatedFood = await foodModel.findByIdAndUpdate(
      stringToObjectId(FoodId),
      { ...FoodData },
      { new: true }
    );
    return rawUpdatedFood && mapDocument(rawUpdatedFood);
  }
  async deleteFood(foodId: string): Promise<void> {
    await foodModel.findOneAndDelete(stringToObjectId(foodId));
  }

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
