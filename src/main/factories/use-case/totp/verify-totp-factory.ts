import { VerifyTotpInterface } from "@application/interfaces/use-cases/totp/VerifyTotpInterface";
import { VerifyTotp } from "@application/use-cases/totp/VerifyTotp";
import { TotpRepository } from "@infra/db/mongodb/repositories/TotpRepository";
import { BcryptAdapter } from "@infra/utils/cryptography/BcryptAdapter";

export const makeVerifyTotp = (): VerifyTotpInterface => {
    const totpRepository = new TotpRepository();
    const bcryptAdapter = new BcryptAdapter(Number(process.env.BCRYPTSALT));


    return new VerifyTotp(totpRepository, bcryptAdapter);
}
