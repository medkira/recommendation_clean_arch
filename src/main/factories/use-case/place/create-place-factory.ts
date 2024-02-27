import { CreatePlaceInterface } from "@application/interfaces/use-cases/places/CreatePlaceInterface";
import { CreatePlace } from "@application/use-cases/place/CreatePlace";
import { PlaceRepository } from "@infra/db/mongodb/repositories/PlaceRepository";




export const makeCreatePlace = (): CreatePlaceInterface => {
    const placeRepository = new PlaceRepository();

    return new CreatePlace(placeRepository);
}