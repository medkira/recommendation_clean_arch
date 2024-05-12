import { GetPlaceByIdRepository } from "@application/interfaces/repositories/place/GetPlaceByIdRepository";
import { GetFoodByIdRepository } from "@application/interfaces/repositories/Food/GetFoodByIdRepository";
import { FoodNotFoundError } from "@application/errors/FoodNotFoundError";
import { PlaceNotFoundError } from "@application/errors/PlaceNotFoundError";
import { GetPlaceByFoodIdInterface } from "@application/interfaces/use-cases/foods/GetPlaceByFoodIdInterface";

export class GetPlaceByFoodId implements GetPlaceByFoodIdInterface {
  constructor(
    private readonly getFoodByIdRepository: GetFoodByIdRepository,
    private readonly GetPlaceByIdRepository: GetPlaceByIdRepository
  ) { }

  async execute(
    foodId: GetPlaceByFoodIdInterface.Request
  ): Promise<GetPlaceByFoodIdInterface.Response> {
    const food = await this.getFoodByIdRepository.getFoodById(foodId);
    // console.log(food)
    if (!food) {
      return new FoodNotFoundError();
    }
    const placeId = food.place_id;
    const place = await this.GetPlaceByIdRepository.getPlaceById(placeId);
    if (!place) {
      return new PlaceNotFoundError();
    }
    return place;
  }
}
