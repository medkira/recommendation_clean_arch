import { DeletUserInterface } from "@application/interfaces/use-cases/users/DeletUserInterface"
import { DeletUser } from "@application/use-cases/users/DeletUser"
import { NormalUserRepository } from "@infra/db/mongodb/repositories/NormalUserRepository";

export const makeDeletUser = (): DeletUserInterface => {
    const userReposiotry = new NormalUserRepository();
    return new DeletUser(userReposiotry);
}