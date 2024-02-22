import { SignUpNormalUserInterface } from "@application/interfaces/use-cases/authentication/SignUpNormalUserInterface";
import { SignUpNormalUser } from "@application/use-cases/authentication/SignUpNormalUser";
import { BcryptAdapter } from "@infra/cryptography/BcryptAdapter";
import { NormalUserRepository } from "@infra/db/mongodb/repositories/NormalUserRepository";

export const makeSignUpNormalUser = (): SignUpNormalUserInterface => {
    const userRepository = new NormalUserRepository();
    const bcryptAdapter = new BcryptAdapter(Number(process.env.BCRYPTSALT));


    return new SignUpNormalUser(userRepository, userRepository, bcryptAdapter);
}