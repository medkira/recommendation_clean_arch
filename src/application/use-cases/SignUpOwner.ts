import { EmailInUseError } from "@application/errors/EmailInUseError";
import { HashGenerator } from "@application/interfaces/cryptography/HashGenerator";
import { CreateOwnerRepository } from "@application/interfaces/repositories/CreateOwnerRepository";
import { LoadUserIdByEmailRepository } from "@application/interfaces/repositories/LoadUserIdByEmailRepository";
import { SignUpOwnerInterface } from "@application/interfaces/use-cases/authentication/SignUpOwnerInterface";

export class SignUpNormalUser implements SignUpNormalUser {

    constructor(
        private readonly loadUserIdByEmailRepository: LoadUserIdByEmailRepository,
        private readonly createOwnerRepository: CreateOwnerRepository,
        private readonly hashGenerator: HashGenerator,
    ) { }
    async execute(userData: SignUpOwnerInterface.Request): Promise<SignUpOwnerInterface.Response> {
        const { email, password } = userData;
        const existingUser = await this.loadUserIdByEmailRepository.loadUserIdByEmail(email);
        if (existingUser) {
            return new EmailInUseError()
        }

        const hashedPassword = await this.hashGenerator.hash(password);

        return this.createOwnerRepository.createOwner({
            ...userData,
            password: hashedPassword,
        });
    }
}