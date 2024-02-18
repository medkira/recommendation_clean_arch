import { EmailInUseError } from "@application/errors/EmailInUseError";
import { HashGenerator } from "@application/interfaces/cryptography/HashGenerator";
import { CreateNormalUserRepository } from "@application/interfaces/repositories/CreateNoramlUserRepository";
import { LoadUserIdByEmailRepository } from "@application/interfaces/repositories/LoadUserIdByEmailRepository";
import { SignUpNormalUserInterface } from "@application/interfaces/use-cases/authentication/SignUpNormalUserInterface";

export class SignUpNormalUser implements SignUpNormalUser {

    constructor(
        private readonly loadUserIdByEmailRepository: LoadUserIdByEmailRepository,
        private readonly createNormalUserRepository: CreateNormalUserRepository,
        private readonly hashGenerator: HashGenerator,
    ) { }
    async execute(userData: SignUpNormalUserInterface.Request): Promise<SignUpNormalUserInterface.Response> {
        const { email, password } = userData;
        const existingUser = await this.loadUserIdByEmailRepository.loadUserIdByEmail(email);
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