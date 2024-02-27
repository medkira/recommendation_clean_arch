import { GetPlaceByTypeInterface } from "@application/interfaces/use-cases/places/GetPlaceByTypeInterface";
import { GetPlaceByType } from "@application/use-cases/place/GetPlaceByType";
import { PlaceRepository } from "@infra/db/mongodb/repositories/PlaceRepository";

export const makeGetPlaceByType = (): GetPlaceByTypeInterface => {
  const placeRepository = new PlaceRepository();
  return new GetPlaceByType(placeRepository);
};
