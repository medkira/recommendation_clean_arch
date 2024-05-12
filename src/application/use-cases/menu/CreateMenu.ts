import { CreateMenuInterface } from "@application/interfaces/use-cases/menu/CreateMenuInterface";
import { CreateMenuRepository } from "@application/interfaces/repositories/Menu/CreateMenuRepository";
import { UploadImage } from "@application/interfaces/utils/upload/UploadImage";
import { PostImageProcess } from "@application/interfaces/utils/image-processing/PostImageProcess";
import { File } from "@domain/entities/File";

export class CreateMenu implements CreateMenuInterface {
  constructor(
    private readonly CreateMenuRepository: CreateMenuRepository,
    private readonly uploadImage: UploadImage,
    private readonly imageProcess: PostImageProcess
  ) { }
  async execute(
    MenuData: CreateMenuInterface.Request
  ): Promise<CreateMenuInterface.Response> {



    const { food_ids, place_id, menuImage } = MenuData;

    const fileImage = menuImage as File[];
    const imageUrls: string[] = [];


    if (menuImage) {
      for (let i = 0; i < fileImage.length; i++) {
        const imageBuffer = await this.imageProcess.PostImageProcess(
          fileImage[i].buffer
        );
        const imageUrl = await this.uploadImage.uploadImage(imageBuffer);
        imageUrls.push(imageUrl);
      }
    }



    return this.CreateMenuRepository.createMenu({
      food_ids, place_id, menuImage: imageUrls
    });
  }
}
