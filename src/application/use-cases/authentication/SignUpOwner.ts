import { EmailInUseError } from "@application/errors/EmailInUseError";
import { HashGenerator } from "@application/interfaces/cryptography/HashGenerator";
import { ProfileImageProcess } from "@application/interfaces/image-processing/ProfileImageProcess";
import { CreateOwnerRepository } from "@application/interfaces/repositories/owner/CreateOwnerRepository";
import { LoadOwnerByEmailRepository } from "@application/interfaces/repositories/owner/LoadOwnerByEmailRepository";
import { UploadImage } from "@application/interfaces/upload/UploadImage";

import { SignUpOwnerInterface } from "@application/interfaces/use-cases/authentication/SignUpOwnerInterface";
import { File } from "@domain/entities/File";

export class SignUpOwner implements SignUpOwner {
  constructor(
    private readonly loadUserByEmailRepository: LoadOwnerByEmailRepository,
    private readonly createOwnerRepository: CreateOwnerRepository,
    private readonly hashGenerator: HashGenerator,
    private readonly uploadImage: UploadImage,
    private readonly imageProcess: ProfileImageProcess
  ) {}
  async execute(
    userData: SignUpOwnerInterface.Request
  ): Promise<SignUpOwnerInterface.Response> {
    const {
      email,
      password,
      phoneNumber,
      name,
      places,
      role,
      username,
      image,
    } = userData;

    // console.log("from signup owner image", image);

    const existingUser = await this.loadUserByEmailRepository.loadUserByEmail(
      email
    );
    if (existingUser) {
      return new EmailInUseError();
    }

    // ! fix this it doesnt look right.
    const fileImage = image as File[];
    let imageUrl = "";
    if (image) {
      // console.log("BUFER ", fileImage[0].buffer)
      const imageBuffer = await this.imageProcess.ProfileImageProcess(
        fileImage[0].buffer
      );
      imageUrl = await this.uploadImage.uploadImage(imageBuffer);
    }

    const hashedPassword = await this.hashGenerator.hash(password);

    return this.createOwnerRepository.createOwner({
      phoneNumber,
      name,
      places,
      role,
      username,
      email,
      image: imageUrl,
      password: hashedPassword,
    });
  }
}

// ? the upload need to be here => after we done all the validation we upload the image(buffer)
// ? to clodinary and the we get the uri ot the image and we save it in the repository

// // ! the validation of the image format need to be done in the the main layer

// let imageUrl; // ! this need to be fixed..

// // ! this need to be a function that its responsible for image resizing and formating

//! this wrong cant forEach and async

// image.forEach(async (element: Express.Multer.File) => {

//     const imageBuffer = await sharp(element!.buffer).resize({ width: 250, height: 250 }).png().toBuffer();
//     imageUrl = await this.uploadImage.uploadImage(imageBuffer);

//     console.log("image url", imageUrl);
// });

// Process each image sequentially using for...of loop
// ! need to fix this bcs re.files sending images / and array of images

// ? fix of for each =>  in case of array of photos
// const imageUrls: string[] = [];
//  for (let element of image) {
// element = element as Express.Multer.File
// Push the image URL to the array
// imageUrls.push(imageUrl);
// }
