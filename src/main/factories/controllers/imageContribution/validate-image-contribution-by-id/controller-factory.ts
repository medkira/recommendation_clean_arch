import { BaseController } from "@infra/http/controllers/BaseController";
import { ValidateImageContributionByIdController } from "@infra/http/controllers/imageContribution/ValidateImageContributionByIdController";
import { makeSendUserEmailAcceptImageContributionById } from "@main/factories/use-case/imageContribution/send-user-email-accpet-image-contribution";
import { makeValidateImageContributionById } from "@main/factories/use-case/imageContribution/validate-image-contribution-by-id-factory";

export const makeValidateImageContributionByIdController = (): BaseController => {
    const validateImageContributionById = makeValidateImageContributionById();
    const sendUserEmailAcceptImageContributionById = makeSendUserEmailAcceptImageContributionById()

    return new ValidateImageContributionByIdController(validateImageContributionById, sendUserEmailAcceptImageContributionById);
}