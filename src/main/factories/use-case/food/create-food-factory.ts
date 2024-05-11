import { CreateFoodInterface } from "@application/interfaces/use-cases/foods/CreateFoodInterface";
import { CreateFood } from "@application/use-cases/food/CreateFood";
import { FoodRepository } from "@infra/db/mongodb/repositories/FoodRepository";
import { ImageProcessAdapter } from "@infra/utils/image-processing/ImageProcessAdapter";
import { UploadAdapter } from "@infra/utils/upload/UploadAdapter";




export const makeCreateFood = (): CreateFoodInterface => {
    const foodRepository = new FoodRepository();
    const uploadAdapter = new UploadAdapter();
    const imageProcessAdapter = new ImageProcessAdapter();

    return new CreateFood(foodRepository, uploadAdapter, imageProcessAdapter);
}