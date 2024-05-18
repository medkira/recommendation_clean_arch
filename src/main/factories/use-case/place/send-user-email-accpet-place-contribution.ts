import { SendUserEmailAcceptPLaceContributionByIdInterface } from "@application/interfaces/use-cases/places/SendUserEmailAcceptPLaceContributionByIdInterface";
import { SendUserEmailAcceptPLaceContributionById } from "@application/use-cases/place/SendUserEmailAcceptPLaceContributionById";
import { NormalUserRepository } from "@infra/db/mongodb/repositories/NormalUserRepository";
import { PlaceRepository } from "@infra/db/mongodb/repositories/PlaceRepository";
import { SendEmailAdapter } from "@infra/utils/send-email/SendEmailAdapter";

export const makeSendUserEmailAcceptPLaceContributionById = (): SendUserEmailAcceptPLaceContributionByIdInterface => {
    const userRepository = new NormalUserRepository();
    const placeRepository = new PlaceRepository();
    const sendEmailAdapter = new SendEmailAdapter();

    return new SendUserEmailAcceptPLaceContributionById(userRepository, placeRepository, sendEmailAdapter)
}