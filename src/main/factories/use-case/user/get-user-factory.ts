import { GetUsersInterface } from "@application/interfaces/use-cases/users/GetUsersInterface";
import { GetUsers } from "@application/use-cases/users/GetUsers";
import { NormalUserRepository } from "@infra/db/mongodb/repositories/NormalUserRepository";

export const makeGetUsers = (): GetUsersInterface => {
    const userRepository = new NormalUserRepository();
    return new GetUsers(userRepository)
}