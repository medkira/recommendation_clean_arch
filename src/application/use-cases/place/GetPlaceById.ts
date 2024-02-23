import { GetPlaceByIdInterface } from "@application/interfaces/use-cases/places/GetPlaceByIdInterface";
import { GetPlaceByIdRepository } from "@application/interfaces/repositories/place/GetPlaceByIdRepository";
export class GetPlaceById implements GetPlaceByIdInterface {
  constructor(
    private readonly GetPlaceByIdRepository: GetPlaceByIdRepository
  ) {}
  execute(
    placeId: GetPlaceByIdInterface.Request
  ): Promise<GetPlaceByIdInterface.Response> {
    return this.GetPlaceByIdRepository.getPlaceById(placeId);
  }
}
