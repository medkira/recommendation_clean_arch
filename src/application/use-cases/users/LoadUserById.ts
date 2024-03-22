import { LoadUserByIdInterface } from "@application/interfaces/use-cases/users/LoadUserByIdInterface";
import { LoadNormalUserByIdRepository } from "@application/interfaces/repositories/normalUser/LoadNormalUserByIdRepository";
import { LoadOwnerByIdlRepository } from "@application/interfaces/repositories/owner/LoadOwnerByIdRepository";
import { NormalUser } from "@domain/entities/NormalUser";
import { Owner } from "@domain/entities/Owner";
import { UserNotFoundError } from "@application/errors/UserNotFoundError";

export class LoadUserById implements LoadUserByIdInterface {
    constructor(
        private readonly loadNormalUserByIdRepository: LoadNormalUserByIdRepository,
        private readonly loadOwnerByIdlRepository: LoadOwnerByIdlRepository,


    ) { }

    async execute(id: LoadUserByIdInterface.Request): Promise<LoadUserByIdInterface.Response> {




        let user: NormalUser | Owner | null = null;

        user = await this.loadNormalUserByIdRepository.loadUserById(id);
        if (!user) {
            user = await this.loadOwnerByIdlRepository.loadUserById(id);
        }

        if (!user) {
            return new UserNotFoundError();
        }


        return user;
    }

}