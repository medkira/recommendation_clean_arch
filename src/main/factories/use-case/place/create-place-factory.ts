import { CreatePlaceInterface } from "@application/interfaces/use-cases/places/CreatePlaceInterface";
import { CreatePlace } from "@application/use-cases/place/CreatePlace";
import { PlaceRepository } from "@infra/db/mongodb/repositories/PlaceRepository";
import { ImageProcessAdapter } from "@infra/utils/image-processing/ImageProcessAdapter";
import { UploadAdapter } from "@infra/utils/upload/UploadAdapter";




export const makeCreatePlace = (): CreatePlaceInterface => {
    const placeRepository = new PlaceRepository();
    const uploadAdapter = new UploadAdapter();
    const imageProcessAdapter = new ImageProcessAdapter();
    return new CreatePlace(placeRepository, uploadAdapter, imageProcessAdapter);
}