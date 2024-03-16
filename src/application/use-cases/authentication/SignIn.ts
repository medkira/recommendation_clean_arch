import { UnauthorizedError } from "@application/errors/UnautorizedError";
import { HashComparer } from "@application/interfaces/utils/cryptography/HashComparer";
import { JWTGenerator } from "@application/interfaces/utils/cryptography/JWTGenerator";
import { LoadNormalUserByEmailRepository } from "@application/interfaces/repositories/normalUser/LoadNormalUserByEmailRepository";
import { LoadOwnerByEmailRepository } from "@application/interfaces/repositories/owner/LoadOwnerByEmailRepository";
import { SignInInterface } from "@application/interfaces/use-cases/authentication/SignInInterface";
import { NormalUser, NormalUserProps } from "@domain/entities/NormalUser";
import { Owner, OwnerProps } from "@domain/entities/Owner";

export class SignIn implements SignInInterface {
    constructor(
        private readonly loadNormalUserByEmailRepository: LoadNormalUserByEmailRepository,
        private readonly loadOwnerByEmailRepository: LoadOwnerByEmailRepository,
        private readonly hashCompare: HashComparer,
        private readonly jwtGenerator: JWTGenerator,

    ) { }

    async execute(credentials: SignInInterface.Request): Promise<SignInInterface.Response> {
        const { email, password } = credentials;


        // ? I think we can improve this , it works fine but it feels wrong.

        let user: NormalUser | Owner | null = null;

        user = await this.loadNormalUserByEmailRepository.loadUserByEmail(email);
        if (!user) {
            user = await this.loadOwnerByEmailRepository.loadUserByEmail(email);
        }

        if (!user) {
            return new UnauthorizedError();
        }


        // if (user instanceof NormalUser) {
        //     console.log(user.)
        // }
        const isPasswordValid = await this.hashCompare.compare(password, user.password);

        if (!isPasswordValid) {
            return new UnauthorizedError();
        }

        return this.jwtGenerator.generate({ userId: user.id, userRole: user.role });
    }

}