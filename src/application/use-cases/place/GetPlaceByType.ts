import { GetPlaceByTypeRepository } from "@application/interfaces/repositories/place/GetPlaceByTypeRepository";
import { GetPlaceByTypeInterface } from "@application/interfaces/use-cases/places/GetPlaceByTypeInterface";

export class GetPlaceByType implements GetPlaceByTypeInterface {
  constructor(
    private readonly GetPlaceByTypeRepository: GetPlaceByTypeRepository
  ) {}
  execute(
    placeType: GetPlaceByTypeInterface.Request
  ): Promise<GetPlaceByTypeInterface.Response> {
    return this.GetPlaceByTypeRepository.getPlaceByType(placeType);
  }
}
