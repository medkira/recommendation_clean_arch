import { CreateFoodInterface } from "@application/interfaces/use-cases/foods/CreateFoodInterface";
import { CreateFoodRepository } from "@application/interfaces/repositories/Food/CreateFoodRepository";
import { UploadImage } from "@application/interfaces/utils/upload/UploadImage";
import { PostImageProcess } from "@application/interfaces/utils/image-processing/PostImageProcess";
import { File } from "@domain/entities/File";

export class CreateFood implements CreateFoodInterface {
  constructor(
    private readonly CreateFoodRepository: CreateFoodRepository,
    private readonly uploadImage: UploadImage,
    private readonly imageProcess: PostImageProcess
  ) { }
  async execute(
    FoodData: CreateFoodInterface.Request
  ): Promise<CreateFoodInterface.Response> {

    const { foodImage, food_type, name, place_id, price } = FoodData;


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






    return this.CreateFoodRepository.createFood({
      food_type, name, place_id, price, foodImage: imageUrls
    });

  }
}
