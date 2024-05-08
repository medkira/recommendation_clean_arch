import { CreatePlaceInterface } from "@application/interfaces/use-cases/places/CreatePlaceInterface";
import { CreatePlaceRepository } from "@application/interfaces/repositories/place/CreatePlaceRepository";
import { PostImageProcess } from "@application/interfaces/utils/image-processing/PostImageProcess";
import { UploadImage } from "@application/interfaces/utils/upload/UploadImage";
import { File } from "@domain/entities/File";

export class CreatePlace implements CreatePlaceInterface {
  constructor(
    private readonly CreatePlaceRepository: CreatePlaceRepository,
    private readonly uploadImage: UploadImage,
    private readonly imageProcess: PostImageProcess
  ) { }
  async execute(
    placeData: CreatePlaceInterface.Request
  ): Promise<CreatePlaceInterface.Response> {

    const { description, location, name, placeImage,
      type, url, user_id, is_verified } = placeData;

    const fileImage = placeImage as File[];
    const imageUrls: string[] = [];


    if (placeImage) {
      for (let i = 0; i < fileImage.length; i++) {
        const imageBuffer = await this.imageProcess.PostImageProcess(
          fileImage[i].buffer
        );
        const imageUrl = await this.uploadImage.uploadImage(imageBuffer);
        imageUrls.push(imageUrl);
      }
    }


    return await this.CreatePlaceRepository.createPlace({
      description,
      location,
      name,
      placeImage: imageUrls,
      type,
      url,
      user_id,
      is_verified
    });
  }
}
