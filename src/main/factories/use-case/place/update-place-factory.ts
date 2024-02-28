import { UpdatePlaceInterface } from "@application/interfaces/use-cases/places/UpdatePlaceInterface";
import { UpdatePlace } from "@application/use-cases/place/UpdatePlace";
import { PlaceRepository } from "@infra/db/mongodb/repositories/PlaceRepository";

export const makeUpdatePlace = (): UpdatePlaceInterface => {
  const placeRepository = new PlaceRepository();
  return new UpdatePlace(placeRepository);
};
