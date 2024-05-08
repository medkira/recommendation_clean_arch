import { AddImageToPlaceByIdRepository } from "@application/interfaces/repositories/place/AddImageToPlaceRepository";
import { UpdatePlaceRepository } from "@application/interfaces/repositories/place/UpdatePlaceRepository";
import { UpdatePlaceInterface } from "@application/interfaces/use-cases/places/UpdatePlaceInterface";
import { PostImageProcess } from "@application/interfaces/utils/image-processing/PostImageProcess";
import { UploadImage } from "@application/interfaces/utils/upload/UploadImage";
import { File } from "@domain/entities/File";

export class UpdatePlace implements UpdatePlaceInterface {
  constructor(
    private readonly UpdatePlaceRepository: UpdatePlaceRepository,
    private readonly addImageToPlaceByIdRepository: AddImageToPlaceByIdRepository,
    private readonly uploadImage: UploadImage,
    private readonly imageProcess: PostImageProcess


  ) { }

  async execute(
    params: UpdatePlaceInterface.Request
  ): Promise<UpdatePlaceInterface.Response> {


    const { placeData, placeId } = params;
    const { description, is_verified, location, name,
      placeImage, type, url } = placeData;




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
    await this.addImageToPlaceByIdRepository.addImageToPlace({ imageUrl: imageUrls[0], placeId: placeId });

    return this.UpdatePlaceRepository.updatePlace({
      placeId,
      placeData: {
        description,
        is_verified,
        location, name,

        type, url
      }
    });
  }
}
