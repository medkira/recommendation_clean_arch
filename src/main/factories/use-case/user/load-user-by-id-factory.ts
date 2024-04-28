import { LoadUserByIdInterface } from "@application/interfaces/use-cases/users/LoadUserByIdInterface";
import { LoadUserById } from "@application/use-cases/users/LoadUserById";
import { GoogleUserRepository } from "@infra/db/mongodb/repositories/GoogleUserRepository";
import { NormalUserRepository } from "@infra/db/mongodb/repositories/NormalUserRepository";
import { OwnerRepository } from "@infra/db/mongodb/repositories/OwnerRepository";

export const makeLoadUserById = (): LoadUserByIdInterface => {
    const normalUserRepository = new NormalUserRepository();
    const ownerRepository = new OwnerRepository();
    const googleUserRepository = new GoogleUserRepository()
    return new LoadUserById(normalUserRepository, ownerRepository, googleUserRepository);
}