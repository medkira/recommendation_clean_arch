import { AutoCompletePlaceSearchInterface } from "@application/interfaces/use-cases/places/AutoCompletePlaceSearchInterface";
import { AutoCompletePlaceSearch } from "@application/use-cases/place/AutoCompletePlaceSearch";
import { PlaceRepository } from "@infra/db/mongodb/repositories/PlaceRepository";

export const makeAutoCompletePlaceSearch = (): AutoCompletePlaceSearchInterface => {
    const placeRepository = new PlaceRepository();
    return new AutoCompletePlaceSearch(placeRepository);
}