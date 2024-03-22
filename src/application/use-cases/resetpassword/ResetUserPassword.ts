import { UserNotFoundError } from "@application/errors/UserNotFoundError";
import { LoadNormalUserByIdRepository } from "@application/interfaces/repositories/normalUser/LoadNormalUserByIdRepository";
import { UpdateNormalUserPasswordRepository } from "@application/interfaces/repositories/normalUser/updateNormalUserPasswordRepository";
import { LoadOwnerByIdlRepository } from "@application/interfaces/repositories/owner/LoadOwnerByIdRepository";
import { UpdateOwnerPasswordRepository } from "@application/interfaces/repositories/owner/UpdateOwnerPasswordRepository";
import { ResetUserPasswordInterface } from "@application/interfaces/use-cases/resetpassword/ResetUserPasswordInterface";
import { HashGenerator } from "@application/interfaces/utils/cryptography/HashGenerator";
import { NormalUser } from "@domain/entities/NormalUser";
import { Owner } from "@domain/entities/Owner";


export class ResetUserPassword implements ResetUserPasswordInterface {

    constructor(

        private readonly updateOwnerPassword: UpdateOwnerPasswordRepository,
        private readonly loadOwnerByIdlRepository: LoadOwnerByIdlRepository,

        private readonly updateNormalUserPassword: UpdateNormalUserPasswordRepository,
        private readonly loadNormalUserByIdRepository: LoadNormalUserByIdRepository,

        private readonly hashGenerator: HashGenerator,

    ) { }
    async execute(request: ResetUserPasswordInterface.Request): Promise<ResetUserPasswordInterface.Response> {
        let user: NormalUser | Owner | null = null;

        user = await this.loadNormalUserByIdRepository.loadUserById(request.id);


        if (user) {
            const hashedPassword = await this.hashGenerator.hash(request.password);
            await this.updateNormalUserPassword.updateNormalUserPassword({ id: user.id, password: hashedPassword })
        }


        if (!user) {
            user = await this.loadOwnerByIdlRepository.loadUserById(request.id);
        }

        if (user) {
            const hashedPassword = await this.hashGenerator.hash(request.password);
            await this.updateOwnerPassword.updateOwnerPassword({ id: user.id, password: hashedPassword })
        }




        if (!user) {
            return new UserNotFoundError();
        }


        return { id: user.id }

    }

}