import { UpdatePlaceInterface } from "@application/interfaces/use-cases/places/UpdatePlaceInterface";
import { UpdatePlace } from "@application/use-cases/place/UpdatePlace";
import { PlaceRepository } from "@infra/db/mongodb/repositories/PlaceRepository";
import { ImageProcessAdapter } from "@infra/utils/image-processing/ImageProcessAdapter";
import { UploadAdapter } from "@infra/utils/upload/UploadAdapter";

export const makeUpdatePlace = (): UpdatePlaceInterface => {
  const placeRepository = new PlaceRepository();
  const uploadAdapter = new UploadAdapter();
  const imageProcessAdapter = new ImageProcessAdapter();
  return new UpdatePlace(placeRepository, placeRepository, uploadAdapter, imageProcessAdapter);
};
