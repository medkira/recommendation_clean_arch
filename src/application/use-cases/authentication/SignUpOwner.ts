import { EmailInUseError } from "@application/errors/EmailInUseError";
import { HashGenerator } from "@application/interfaces/utils/cryptography/HashGenerator";
import { ProfileImageProcess } from "@application/interfaces/utils/image-processing/ProfileImageProcess";
import { CreateOwnerRepository } from "@application/interfaces/repositories/owner/CreateOwnerRepository";
import { LoadOwnerByEmailRepository } from "@application/interfaces/repositories/owner/LoadOwnerByEmailRepository";
import { UploadImage } from "@application/interfaces/utils/upload/UploadImage";
import { SignUpOwnerInterface } from "@application/interfaces/use-cases/authentication/SignUpOwnerInterface";
import { File } from "@domain/entities/File";

export class SignUpOwner implements SignUpOwner {

  constructor(
    private readonly loadUserByEmailRepository: LoadOwnerByEmailRepository,
    private readonly createOwnerRepository: CreateOwnerRepository,
    private readonly hashGenerator: HashGenerator,
    private readonly uploadImage: UploadImage,
    private readonly imageProcess: ProfileImageProcess,
  ) { }
  async execute(userData: SignUpOwnerInterface.Request): Promise<SignUpOwnerInterface.Response> {
    const { email, password, phoneNumber, name, places, role, username, image } = userData;


    const existingUser = await this.loadUserByEmailRepository.loadUserByEmail(email);
    if (existingUser) {
      return new EmailInUseError()
    }

    const fileImage = image as File[];
    let imageUrl = "";
    if (image instanceof File) {
      const imageBuffer = await this.imageProcess.ProfileImageProcess(fileImage[0].buffer);
      imageUrl = await this.uploadImage.uploadImage(imageBuffer);
    } else {
      imageUrl = image as string;
    }

    const hashedPassword = await this.hashGenerator.hash(password);

    return this.createOwnerRepository.createOwner({
      email,
      password: hashedPassword,
      phoneNumber,
      name,
      places,
      role,
      username,
      image: imageUrl,
    });
  }
}