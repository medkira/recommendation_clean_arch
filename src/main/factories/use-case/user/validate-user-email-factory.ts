import { VerfifyUserEmailByIdInterface } from "@application/interfaces/use-cases/users/VerifyUserEmailInterface";
import { ValidateUserEmailById } from "@application/use-cases/users/validateUserEmailById";
import { NormalUserRepository } from "@infra/db/mongodb/repositories/NormalUserRepository";

export const makeValidateUserEmail = (): VerfifyUserEmailByIdInterface => {
    const normalUserRepository = new NormalUserRepository();
    return new ValidateUserEmailById(normalUserRepository);
}