import { EmailInUseError } from "@application/errors/EmailInUseError";
import { HashGenerator } from "@application/interfaces/utils/cryptography/HashGenerator";
import { ProfileImageProcess } from "@application/interfaces/utils/image-processing/ProfileImageProcess";
import { CreateNormalUserRepository } from "@application/interfaces/repositories/normalUser/CreateNoramlUserRepository";
import { LoadNormalUserByEmailRepository } from "@application/interfaces/repositories/normalUser/LoadNormalUserByEmailRepository";
import { UploadImage } from "@application/interfaces/utils/upload/UploadImage";
import { SignUpNormalUserInterface } from "@application/interfaces/use-cases/authentication/SignUpNormalUserInterface";
import { File } from "@domain/entities/File";
import { buffer } from "stream/consumers";

export class SignUpNormalUser implements SignUpNormalUser {

    constructor(
        private readonly loadUserByEmailRepository: LoadNormalUserByEmailRepository,
        private readonly createNormalUserRepository: CreateNormalUserRepository,
        private readonly hashGenerator: HashGenerator,
        private readonly uploadImage: UploadImage,
        private readonly imageProcess: ProfileImageProcess,
    ) { }
    async execute(userData: SignUpNormalUserInterface.Request): Promise<SignUpNormalUserInterface.Response> {
        const { email, password, age, address, gender, profileImage, jobTitle, link, firstName, country, lastName,
            parent, phoneNumber, role, salary, socialStatus, username, zone } = userData;

        // console.log("email from sign up user ", email)
        const existingUser = await this.loadUserByEmailRepository.loadUserByEmail(email);
        if (existingUser) {
            return new EmailInUseError()
        }

        const fileImage = profileImage as File[];
        let imageUrl = "";
        if (profileImage instanceof File) {
            const imageBuffer = await this.imageProcess.ProfileImageProcess(fileImage[0].buffer);
            imageUrl = await this.uploadImage.uploadImage(imageBuffer);
        } else {
            imageUrl = profileImage as string;
        }

        // console.log("ROLE from sign up user ", role)
        const hashedPassword = await this.hashGenerator.hash(password);


        return this.createNormalUserRepository.createNormalUser({
            email,
            password: hashedPassword,
            age,
            address,
            gender,
            jobTitle,
            link,
            firstName,
            parent,
            phoneNumber,
            role,
            salary,
            socialStatus,
            zone,
            profileImage: imageUrl,
            country,
            lastName,
            username,

        });
    }
}