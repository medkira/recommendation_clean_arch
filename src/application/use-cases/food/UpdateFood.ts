import { UpdateFoodInterface } from "@application/interfaces/use-cases/foods/UpdateFoodInterface";
import { UpdateFoodRepository } from "@application/interfaces/repositories/Food/UpdateFoodRepository";
import { UploadImage } from "@application/interfaces/utils/upload/UploadImage";
import { PostImageProcess } from "@application/interfaces/utils/image-processing/PostImageProcess";
import { File } from "@domain/entities/File";




export class UpdateFood implements UpdateFoodInterface {
  constructor(
    private readonly UpdateFoodRepository: UpdateFoodRepository,
    private readonly uploadImage: UploadImage,
    private readonly imageProcess: PostImageProcess) { }
  async execute(
    params: UpdateFoodInterface.Request
  ): Promise<UpdateFoodInterface.Response> {

    const { FoodData, FoodId } = params;
    const { food_type, name, price, foodImage } = FoodData;



    const fileImage = foodImage as File[];
    const imageUrls: string[] = [];


    if (foodImage) {
      for (let i = 0; i < fileImage.length; i++) {
        const imageBuffer = await this.imageProcess.PostImageProcess(
          fileImage[i].buffer
        );
        const imageUrl = await this.uploadImage.uploadImage(imageBuffer);
        imageUrls.push(imageUrl);
      }
    }



    return this.UpdateFoodRepository.updateFood(
      {
        FoodId,
        FoodData: {
          food_type, name, price, foodImage: imageUrls
        }
      }
    );
  }
}
