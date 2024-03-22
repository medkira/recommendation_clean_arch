import { DeleteTotpByUserIdInterface } from "@application/interfaces/use-cases/totp/DeleteTotpByUserIdInterface";
import { GetTotpByUserIdRepository } from "@application/interfaces/repositories/totp/GetTotpByUserIdRepository";
import { UnauthorizedError } from "@application/errors/UnautorizedError";
import { DeleteTotpByUserIdRepository } from "@application/interfaces/repositories/totp/DeleteTotpByUserIdRepository";



export class DeleteTotpByUserId implements DeleteTotpByUserIdInterface {
    constructor(
        private readonly getTotpByUserId: GetTotpByUserIdRepository,
        private readonly deleteTotpByUserId: DeleteTotpByUserIdRepository,
    ) { }

    async execute(id: DeleteTotpByUserIdInterface.Request): Promise<DeleteTotpByUserIdInterface.Response> {

        const userTotp = await this.getTotpByUserId.getTotpByUserId(id);

        if (!userTotp) {
            return new UnauthorizedError();
        }


        await this.deleteTotpByUserId.deleteTotp(id);


    }



}