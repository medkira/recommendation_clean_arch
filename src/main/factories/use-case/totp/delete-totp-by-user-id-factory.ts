import { DeleteTotpByUserIdInterface } from "@application/interfaces/use-cases/totp/DeleteTotpByUserIdInterface";
import { DeleteTotpByUserId } from "@application/use-cases/totp/DeleteTotpByUserId";
import { TotpRepository } from "@infra/db/mongodb/repositories/TotpRepository";

export const makeDelteTotpByUserId = (): DeleteTotpByUserIdInterface => {
    const totpRepository = new TotpRepository();

    return new DeleteTotpByUserId(totpRepository, totpRepository);
}
