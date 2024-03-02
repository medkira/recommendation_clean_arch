import { GetLatesPlacesInterface } from "@application/interfaces/use-cases/places/GetlatestPlacesInterface";
import { GetLatesPlaces } from "@application/use-cases/place/GetLatesPlaces";
import { PlaceRepository } from "@infra/db/mongodb/repositories/PlaceRepository";

export const makeGetLatestPlaces = (): GetLatesPlacesInterface => {
    const placeRepository = new PlaceRepository();
    return new GetLatesPlaces(placeRepository);
}