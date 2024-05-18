import { LoadUserByIdInterface } from "@application/interfaces/use-cases/users/LoadUserByIdInterface";
import { LoadNormalUserByIdRepository } from "@application/interfaces/repositories/normalUser/LoadNormalUserByIdRepository";
import { LoadOwnerByIdlRepository } from "@application/interfaces/repositories/owner/LoadOwnerByIdRepository";
import { NormalUser, NormalUserProps } from "@domain/entities/NormalUser";
import { Owner } from "@domain/entities/Owner";
import { UserNotFoundError } from "@application/errors/UserNotFoundError";
import { GetGoogleUserByIdRepository } from "@application/interfaces/repositories/googleUser/GetGoogleUserByIdRepository";

export class LoadUserById implements LoadUserByIdInterface {
    constructor(
        private readonly loadNormalUserByIdRepository: LoadNormalUserByIdRepository,
        private readonly loadOwnerByIdlRepository: LoadOwnerByIdlRepository,
        private readonly loadGoogleUserByIdRepository: GetGoogleUserByIdRepository,

    ) { }

    async execute(id: LoadUserByIdInterface.Request): Promise<LoadUserByIdInterface.Response> {



        let user: NormalUser | null = null;

        user = await this.loadNormalUserByIdRepository.loadUserById(id);

        // if (!user) {
        //     user = await this.loadOwnerByIdlRepository.loadUserById(id);
        // }

        if (!user) {
            user = await this.loadGoogleUserByIdRepository.getGoogleUserById(id);
        }

        if (!user) {
            return new UserNotFoundError();
        }


        return user;
    }

}