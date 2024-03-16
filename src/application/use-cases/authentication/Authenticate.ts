import { ForbiddenError } from "@application/errors/ForbiddenError";
import { JWTVerifier } from "@application/interfaces/utils/cryptography/JWTVerifier";
import { AuthenticateInterface } from "@application/interfaces/use-cases/authentication/AuthenticateInterface";

export class Authenticate implements AuthenticateInterface {
    constructor(
        private readonly jwtVerifier: JWTVerifier,
    ) { }

    async execute(authenticationToken: string): Promise<AuthenticateInterface.Response> {
        const decodeToken = await this.jwtVerifier.verify(authenticationToken);

        if (!decodeToken) {
            return new ForbiddenError();
        }
        return decodeToken;
    }
}