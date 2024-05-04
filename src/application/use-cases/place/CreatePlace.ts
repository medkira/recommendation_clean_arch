import { CreatePlaceInterface } from "@application/interfaces/use-cases/places/CreatePlaceInterface";
import { CreatePlaceRepository } from "@application/interfaces/repositories/place/CreatePlaceRepository";

export class CreatePlace implements CreatePlaceInterface {
  constructor(private readonly CreatePlaceRepository: CreatePlaceRepository) { }
  async execute(
    placeData: CreatePlaceInterface.Request
  ): Promise<CreatePlaceInterface.Response> {
    return await this.CreatePlaceRepository.createPlace({
      ...placeData,
    });
  }
}
