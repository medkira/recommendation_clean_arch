import { SignInInterface } from "@application/interfaces/use-cases/authentication/SignInInterface";
import { SignIn } from "@application/use-cases/authentication/SignIn";
import { BcryptAdapter } from "@infra/utils/cryptography/BcryptAdapter";
import { JWTAdapter } from "@infra/utils/cryptography/JWTAdapter";
import { NormalUserRepository } from "@infra/db/mongodb/repositories/NormalUserRepository";
import { OwnerRepository } from "@infra/db/mongodb/repositories/OwnerRepository";

export const makeSignIn = (): SignInInterface => {
    const userRepository = new NormalUserRepository();
    const ownerRepository = new OwnerRepository();
    const bcryptAdapter = new BcryptAdapter(process.env.BCRYPTSALT);
    const jwtAdapter = new JWTAdapter(process.env.JWT_SECRET);

    return new SignIn(userRepository, ownerRepository, bcryptAdapter, jwtAdapter);
}