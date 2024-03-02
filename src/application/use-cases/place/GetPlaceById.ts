import { GetPlaceByIdInterface } from "@application/interfaces/use-cases/places/GetPlaceByIdInterface";
import { GetPlaceByIdRepository } from "@application/interfaces/repositories/place/GetPlaceByIdRepository";
import { PlaceNotFoundError } from "@application/errors/PlaceNotFoundError";
export class GetPlaceById implements GetPlaceByIdInterface {
  constructor(
    private readonly GetPlaceByIdRepository: GetPlaceByIdRepository
  ) { }
  async execute(
    placeId: GetPlaceByIdInterface.Request
  ): Promise<GetPlaceByIdInterface.Response> {

    const place = await this.GetPlaceByIdRepository.getPlaceById(placeId);

    if (!place) {
      return new PlaceNotFoundError();
    }

    return place
  }
}
