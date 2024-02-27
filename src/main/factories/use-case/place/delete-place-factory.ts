import { DeletePlaceInterface } from "@application/interfaces/use-cases/places/DeletePlaceInterface";
import { DeletePlace } from "@application/use-cases/place/DeletePlace";
import { PlaceRepository } from "@infra/db/mongodb/repositories/PlaceRepository";

export const makeDeletePlace = (): DeletePlaceInterface => {
  const placeRepository = new PlaceRepository();
  return new DeletePlace(placeRepository);
};
