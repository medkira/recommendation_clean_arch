import { PlaceNotFoundError } from "@application/errors/PlaceNotFoundError";
import { CreateImageContributionRepository } from "@application/interfaces/repositories/imageContribution/CreateImageContributionRepository";
import { GetPlaceByIdRepository } from "@application/interfaces/repositories/place/GetPlaceByIdRepository";
import { CreateImageContributionInterface } from "@application/interfaces/use-cases/imageContribution/CreateImageContributionInterface";
import { PostImageProcess } from "@application/interfaces/utils/image-processing/PostImageProcess";
import { UploadImage } from "@application/interfaces/utils/upload/UploadImage";
import { File } from "@domain/entities/File";


export class CreateImageContribution implements CreateImageContributionInterface {
    constructor(
        private readonly createImageContributionRepository: CreateImageContributionRepository,
        private readonly getPlaceByIdRepository: GetPlaceByIdRepository,
        private readonly uploadImage: UploadImage,
        private readonly imageProcess: PostImageProcess
    ) { }

    async execute(imageContributionData: CreateImageContributionInterface.Request): Promise<CreateImageContributionInterface.Response> {
        const { image, place_id, user_id, user_name } = imageContributionData;
        const fileImage = image as File[];
        const imageUrls: string[] = [];

        if (image) {
            for (let i = 0; i < fileImage.length; i++) {
                const imageBuffer = await this.imageProcess.PostImageProcess(
                    fileImage[i].buffer
                );
                const imageUrl = await this.uploadImage.uploadImage(imageBuffer);
                imageUrls.push(imageUrl);
            }
        }

        const place = await this.getPlaceByIdRepository.getPlaceById(place_id!);
        if (!place) {
            return new PlaceNotFoundError();
        }

        return this.createImageContributionRepository.createImageContribution({
            image: imageUrls,
            place_id,
            place_name: place.name,
            user_id,
            user_name,
        });
    }
}
