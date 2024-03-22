import { ForbiddenError } from "@application/errors/ForbiddenError";
import { JWTVerifier } from "@application/interfaces/utils/cryptography/JWTVerifier";
import { VerifyTotpInterface } from "@application/interfaces/use-cases/totp/VerifyTotpInterface";
import { GetTotpByUserIdRepository } from "@application/interfaces/repositories/totp/GetTotpByUserIdRepository";
import { HashComparer } from "@application/interfaces/utils/cryptography/HashComparer";
import { UnauthorizedError } from "@application/errors/UnautorizedError";



export class VerifyTotp implements VerifyTotpInterface {
    constructor(
        private readonly getTotpByUserId: GetTotpByUserIdRepository,
        private readonly hashCompare: HashComparer,
    ) { }

    async execute(payload: VerifyTotpInterface.Request): Promise<VerifyTotpInterface.Response> {
        const { code, userId } = payload as { code: string, userId: string };

        const userTotp = await this.getTotpByUserId.getTotpByUserId(userId);
        if (!userTotp) {
            return new UnauthorizedError();
        }

        if (this.isExpired(userTotp.expiresAt!)) {
            return new ForbiddenError();
        }

        const isTotpValid = await this.hashCompare.compare(code, userTotp.code);

        if (!isTotpValid) {
            return new UnauthorizedError();
        }

        return isTotpValid;
    }

    private isExpired(expirationDate: Date): boolean {
        const currentTimestamp = new Date();
        const expirationTimestamp = expirationDate;
        return currentTimestamp > expirationTimestamp;
    }

}