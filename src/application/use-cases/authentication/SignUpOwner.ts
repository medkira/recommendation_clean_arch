import { EmailInUseError } from "@application/errors/EmailInUseError";
import { HashGenerator } from "@application/interfaces/cryptography/HashGenerator";
import { CreateOwnerRepository } from "@application/interfaces/repositories/owner/CreateOwnerRepository";
import { LoadOwnerByEmailRepository } from "@application/interfaces/repositories/owner/LoadOwnerByEmailRepository";

import { SignUpOwnerInterface } from "@application/interfaces/use-cases/authentication/SignUpOwnerInterface";

export class SignUpOwner implements SignUpOwner {

    constructor(
        private readonly loadUserByEmailRepository: LoadOwnerByEmailRepository,
        private readonly createOwnerRepository: CreateOwnerRepository,
        private readonly hashGenerator: HashGenerator,
    ) { }
    async execute(userData: SignUpOwnerInterface.Request): Promise<SignUpOwnerInterface.Response> {
        const { email, password, phoneNumber, name, places, role, username } = userData;
        const existingUser = await this.loadUserByEmailRepository.loadUserByEmail(email);
        if (existingUser) {
            return new EmailInUseError()
        }

        const hashedPassword = await this.hashGenerator.hash(password);
        return this.createOwnerRepository.createOwner({
            phoneNumber,
            name,
            places,
            role,
            username,
            email,
            password: hashedPassword,
        });
    }
}