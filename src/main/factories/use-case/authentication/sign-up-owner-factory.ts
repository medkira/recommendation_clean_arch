import { SignUpOwnerInterface } from "@application/interfaces/use-cases/authentication/SignUpOwnerInterface";
import { SignUpOwner } from "@application/use-cases/authentication/SignUpOwner";
import { BcryptAdapter } from "@infra/cryptography/BcryptAdapter";
import { OwnerRepository } from "@infra/db/mongodb/repositories/OwnerRepository";

export const makeSignUpOwner = (): SignUpOwnerInterface => {
    const userRepository = new OwnerRepository();
    const bcryptAdapter = new BcryptAdapter(Number(process.env.BCRYPTSALT));


    return new SignUpOwner(userRepository, userRepository, bcryptAdapter);
}