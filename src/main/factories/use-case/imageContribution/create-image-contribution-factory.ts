import { CreateImageContributionInterface } from "@application/interfaces/use-cases/imageContribution/CreateImageContributionInterface";
import { CreateImageContribution } from "@application/use-cases/imageContribution/CreateImageContribution";
import { ImageContributionRepository } from "@infra/db/mongodb/repositories/ImageContributionRepository";
import { ImageProcessAdapter } from "@infra/utils/image-processing/ImageProcessAdapter";
import { UploadAdapter } from "@infra/utils/upload/UploadAdapter";

export const makeCreateImageContribution = (): CreateImageContributionInterface => {
    const imageContribuitionRepository = new ImageContributionRepository();
    const uploadAdapter = new UploadAdapter();
    const imageProcessAdapter = new ImageProcessAdapter();


    return new CreateImageContribution(imageContribuitionRepository, uploadAdapter, imageProcessAdapter);
}