import { NormalUserRepository } from "@infra/db/mongodb/repositories/NormalUserRepository";
import { SendEmailAdapter } from "@infra/utils/send-email/SendEmailAdapter";
import { ImageContributionRepository } from "@infra/db/mongodb/repositories/ImageContributionRepository";
import { SendUserEmailAcceptImageContributionByIdInterface } from "@application/interfaces/use-cases/imageContribution/SendUserEmailAcceptImageContributionByIdInterface";
import { SendUserEmailAcceptImageContributionById } from "@application/use-cases/imageContribution/SendUserEmailAcceptImageContributionById";
import { PlaceRepository } from "@infra/db/mongodb/repositories/PlaceRepository";

export const makeSendUserEmailAcceptImageContributionById = (): SendUserEmailAcceptImageContributionByIdInterface => {
    const userRepository = new NormalUserRepository();
    const ImageRepository = new ImageContributionRepository();
    const sendEmailAdapter = new SendEmailAdapter();
    const placeRepository = new PlaceRepository();
    return new SendUserEmailAcceptImageContributionById(userRepository, ImageRepository, sendEmailAdapter, placeRepository)
}