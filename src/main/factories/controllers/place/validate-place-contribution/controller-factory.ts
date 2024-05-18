import { ValidationPlaceContributionById } from "@application/use-cases/place/ValidationPlaceContributionById";
import { BaseController } from "@infra/http/controllers/BaseController";
import { ValidatePlaceContributionByIdController } from "@infra/http/controllers/place/ValidatePlaceContributionByIdController";
import { makeSendUserEmailAcceptPLaceContributionById } from "@main/factories/use-case/place/send-user-email-accpet-place-contribution";
import { makeValidatePlaceContributionById } from "@main/factories/use-case/place/validate-place-contribution-by-id";

export const makeValidatePlaceContributionByIdController = (): BaseController => {
    const ValidatePlaceContributionById = makeValidatePlaceContributionById();
    const sendUserEmailAcceptPLaceContributionById = makeSendUserEmailAcceptPLaceContributionById()
    return new ValidatePlaceContributionByIdController(ValidatePlaceContributionById, sendUserEmailAcceptPLaceContributionById);
}