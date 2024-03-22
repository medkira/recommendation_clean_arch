import { ResetUserPasswordInterface } from "@application/interfaces/use-cases/resetpassword/ResetUserPasswordInterface";
import { ResetUserPassword } from "@application/use-cases/resetpassword/ResetUserPassword";
import { NormalUserRepository } from "@infra/db/mongodb/repositories/NormalUserRepository";
import { OwnerRepository } from "@infra/db/mongodb/repositories/OwnerRepository";
import { BcryptAdapter } from "@infra/utils/cryptography/BcryptAdapter";

export const makeResetUserPassword = (): ResetUserPasswordInterface => {
    const userRepository = new NormalUserRepository();
    const ownerRepository = new OwnerRepository();
    const bcryptAdapter = new BcryptAdapter(Number(process.env.BCRYPTSALT));
    return new ResetUserPassword(ownerRepository, ownerRepository, userRepository, userRepository, bcryptAdapter);
}

