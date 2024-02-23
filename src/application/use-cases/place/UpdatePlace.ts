import { UpdatePlaceRepository } from "@application/interfaces/repositories/place/UpdatePlaceRepository";
import { UpdatePlaceInterface } from "@application/interfaces/use-cases/places/UpdatePlaceInterface";

export class UpdatePlace implements UpdatePlaceInterface {
  constructor(private readonly UpdatePlaceRepository: UpdatePlaceRepository) {}
  execute(
    params: UpdatePlaceInterface.Request
  ): Promise<UpdatePlaceInterface.Response> {
    return this.UpdatePlaceRepository.updatePlace(params);
  }
}
