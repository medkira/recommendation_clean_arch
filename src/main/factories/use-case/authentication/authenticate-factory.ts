import { AuthenticateInterface } from "@application/interfaces/use-cases/authentication/AuthenticateInterface";
import { Authenticate } from "@application/use-cases/authentication/Authenticate";
import { JWTAdapter } from "@infra/utils/cryptography/JWTAdapter";
import dotenv from 'dotenv';
dotenv.config({ path: 'src/main/config/env/.env' });

export const makeAuthenticate = (): AuthenticateInterface => {
    const jwtAdapter = new JWTAdapter(process.env.JWT_SECRET);
    return new Authenticate(jwtAdapter);
}