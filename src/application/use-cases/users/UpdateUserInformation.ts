import { PostNotFoundError } from "@application/errors/PostNotFoundError";
import { GetPostByIdRepository } from "@application/interfaces/repositories/post/GetPostByIdRepository";
import { UpdateUserInformationByIdRepository } from "@application/interfaces/repositories/users/UpdateUserInformationByIdRepository";
import { UpdateUserInformationByIdInterface } from "@application/interfaces/use-cases/users/UpdateUserInformationByIdInterface";
import { PostImageProcess } from "@application/interfaces/utils/image-processing/PostImageProcess";
import { UploadImage } from "@application/interfaces/utils/upload/UploadImage";
import { File } from "@domain/entities/File";

export class UpdateUserInformationById implements UpdateUserInformationByIdInterface {
    constructor(
        private readonly UpdateUserInformationByIdRepository: UpdateUserInformationByIdRepository,
        private readonly uploadImage: UploadImage,
        private readonly imageProcess: PostImageProcess
    ) { }

    async execute(
        params: UpdateUserInformationByIdInterface.Request
    ): Promise<UpdateUserInformationByIdInterface.Response> {
        const { UserData, userId } = params;
        let { address, age, email, favouritePlaces, gender, jobTitle, profileImage } = UserData;
        const imageUrls: string[] = [];
        // console.log(profileImage)
        if (profileImage) {
            const fileImage = profileImage as File[];
            for (let i = 0; i < fileImage.length; i++) {
                const imageBuffer = await this.imageProcess.PostImageProcess(
                    fileImage[i].buffer
                );
                const imageUrl = await this.uploadImage.uploadImage(imageBuffer);
                imageUrls.push(imageUrl);
            }
        }

        return this.UpdateUserInformationByIdRepository.UpdateUserInformation({
            userId, UserData: {
                ...UserData,
                profileImage: imageUrls[0] as any,
            }
        });
    }
}
