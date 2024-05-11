import { UpdateFoodInterface } from "@application/interfaces/use-cases/foods/UpdateFoodInterface";
import { UpdateFood } from "@application/use-cases/food/UpdateFood";
import { FoodRepository } from "@infra/db/mongodb/repositories/FoodRepository";
import { ImageProcessAdapter } from "@infra/utils/image-processing/ImageProcessAdapter";
import { UploadAdapter } from "@infra/utils/upload/UploadAdapter";





export const makeUpdateFood = (): UpdateFoodInterface => {
  const foodRepository = new FoodRepository();
  const uploadAdapter = new UploadAdapter();
  const imageProcessAdapter = new ImageProcessAdapter();
  return new UpdateFood(foodRepository, uploadAdapter, imageProcessAdapter);
};



