import { BaseController } from "@infra/http/controllers/BaseController";
import { CreateImageContributionController } from "@infra/http/controllers/imageContribution/CreateImageContributionController";
import { makeCreateImageContribution } from "@main/factories/use-case/imageContribution/create-image-contribution-factory";
import { makeLoadUserById } from "@main/factories/use-case/user/load-user-by-id-factory";

export const makeCreateImageContributionController = (): BaseController => {
    const createImageContribution = makeCreateImageContribution();
    const loadUserById = makeLoadUserById();


    return new CreateImageContributionController(createImageContribution, loadUserById);
}