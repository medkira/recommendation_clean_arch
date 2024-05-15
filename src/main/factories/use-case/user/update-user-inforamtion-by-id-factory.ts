import { UpdateUserInformationByIdInterface } from "@application/interfaces/use-cases/users/UpdateUserInformationByIdInterface";
import { UpdateUserInformationById } from "@application/use-cases/users/UpdateUserInformation";
import { NormalUserRepository } from "@infra/db/mongodb/repositories/NormalUserRepository";
import { ImageProcessAdapter } from "@infra/utils/image-processing/ImageProcessAdapter";
import { UploadAdapter } from "@infra/utils/upload/UploadAdapter";

export const makeUpdateUserInforamtionById = (): UpdateUserInformationByIdInterface => {
    const normaluserRespository = new NormalUserRepository();
    const uploadAdapter = new UploadAdapter();
    const imageProcess = new ImageProcessAdapter();
    return new UpdateUserInformationById(normaluserRespository, uploadAdapter, imageProcess)
}