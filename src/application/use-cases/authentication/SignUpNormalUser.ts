import { EmailInUseError } from "@application/errors/EmailInUseError";
import { HashGenerator } from "@application/interfaces/cryptography/HashGenerator";
import { CreateNormalUserRepository } from "@application/interfaces/repositories/normalUser/CreateNoramlUserRepository";
import { LoadNormalUserByEmailRepository } from "@application/interfaces/repositories/normalUser/LoadNormalUserByEmailRepository";
import { SignUpNormalUserInterface } from "@application/interfaces/use-cases/authentication/SignUpNormalUserInterface";

export class SignUpNormalUser implements SignUpNormalUser {

    constructor(
        private readonly loadUserByEmailRepository: LoadNormalUserByEmailRepository,
        private readonly createNormalUserRepository: CreateNormalUserRepository,
        private readonly hashGenerator: HashGenerator,
    ) { }
    async execute(userData: SignUpNormalUserInterface.Request): Promise<SignUpNormalUserInterface.Response> {
        const { email, password, } = userData;
        const existingUser = await this.loadUserByEmailRepository.loadUserByEmail(email);
        if (existingUser) {
            return new EmailInUseError()
        }

        const hashedPassword = await this.hashGenerator.hash(password);

        return this.createNormalUserRepository.createNormalUser({
            ...userData,
            password: hashedPassword,
        });
    }
}