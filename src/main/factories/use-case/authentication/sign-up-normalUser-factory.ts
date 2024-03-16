import { SignUpNormalUserInterface } from "@application/interfaces/use-cases/authentication/SignUpNormalUserInterface";
import { SignUpNormalUser } from "@application/use-cases/authentication/SignUpNormalUser";
import { BcryptAdapter } from "@infra/utils/cryptography/BcryptAdapter";
import { NormalUserRepository } from "@infra/db/mongodb/repositories/NormalUserRepository";
import { UploadAdapter } from "@infra/utils/upload/UploadAdapter";
import { ImageProcessAdapter } from "@infra/utils/image-processing/ImageProcessAdapter";

export const makeSignUpNormalUser = (): SignUpNormalUserInterface => {
    const userRepository = new NormalUserRepository();
    const bcryptAdapter = new BcryptAdapter(Number(process.env.BCRYPTSALT));
    const uploadAdapter = new UploadAdapter();
    const imageProcessAdapter = new ImageProcessAdapter();

    return new SignUpNormalUser(userRepository, userRepository, bcryptAdapter, uploadAdapter, imageProcessAdapter);
}