import { PlaceNotFoundError } from "@application/errors/PlaceNotFoundError";
import { GetPlaceByTypeRepository } from "@application/interfaces/repositories/place/GetPlaceByTypeRepository";
import { GetPlaceByTypeInterface } from "@application/interfaces/use-cases/places/GetPlaceByTypeInterface";

export class GetPlaceByType implements GetPlaceByTypeInterface {
  constructor(
    private readonly GetPlaceByTypeRepository: GetPlaceByTypeRepository
  ) { }
  async execute(placeType: GetPlaceByTypeInterface.Request):
    Promise<GetPlaceByTypeInterface.Response> {

    const place = await this.GetPlaceByTypeRepository.getPlaceByType(placeType);

    if (!place) {
      return new PlaceNotFoundError();
    }

    return place;
  }
}
