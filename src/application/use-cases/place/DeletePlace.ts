import { DeletePlaceInterface } from "@application/interfaces/use-cases/places/DeletePlaceInterface";
import { DeletePlaceRepository } from "@application/interfaces/repositories/place/DeletePlaceRepository";

export class DeletePlace implements DeletePlaceInterface {
  constructor(private readonly DeletePlaceRepository: DeletePlaceRepository) {}
  execute(
    placeId: DeletePlaceInterface.Request
  ): Promise<DeletePlaceInterface.Response> {
    return this.DeletePlaceRepository.deletePlace(placeId);
  }
}
