import { BaseController } from "@infra/http/controllers/BaseController";
import { ValidateImageContributionByIdController } from "@infra/http/controllers/imageContribution/ValidateImageContributionByIdController";
import { makeValidateImageContributionById } from "@main/factories/use-case/imageContribution/validate-image-contribution-by-id-factory";

export const makeValidateImageContributionByIdController = (): BaseController => {
    const validateImageContributionById = makeValidateImageContributionById();

    return new ValidateImageContributionByIdController(validateImageContributionById);
}