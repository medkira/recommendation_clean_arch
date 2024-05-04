import { CreateImageContributionRepository } from "@application/interfaces/repositories/imageContribution/CreateImageContributionRepository";
import { CreateImageContributionInterface } from "@application/interfaces/use-cases/imageContribution/CreateImageContributionInterface";
import { PostImageProcess } from "@application/interfaces/utils/image-processing/PostImageProcess";
import { UploadImage } from "@application/interfaces/utils/upload/UploadImage";
import { File } from "@domain/entities/File";


export class CreateImageContribution implements CreateImageContributionInterface {
    constructor(
        private readonly createImageContributionRepository: CreateImageContributionRepository,
        private readonly uploadImage: UploadImage,
        private readonly imageProcess: PostImageProcess
    ) { }

    async execute(imageContributionData: CreateImageContributionInterface.Request): Promise<string> {
        const { image, is_verified, place_id, user_id, user_name } = imageContributionData;
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
        return this.createImageContributionRepository.createImageContribution({
            image: imageUrls,
            is_verified,
            place_id,
            user_id,
            user_name,
        });
    }
}
