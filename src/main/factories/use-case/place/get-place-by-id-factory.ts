import { GetPlaceByIdInterface } from "@application/interfaces/use-cases/places/GetPlaceByIdInterface";
import { GetPlaceById } from "@application/use-cases/place/GetPlaceById";
import { PlaceRepository } from "@infra/db/mongodb/repositories/PlaceRepository";

export const makeGetPlaceById = (): GetPlaceByIdInterface => {
  const placeRepository = new PlaceRepository();
  return new GetPlaceById(placeRepository);
};
