import { Food } from "@domain/entities/Food";

export interface GetFoodByIdRepository {
    getFoodById(foodId: GetFoodByIdRepository.Request): Promise<GetFoodByIdRepository.Response>;
}

export namespace GetFoodByIdRepository {
    export type Request = string;
    export type Response = Food | null;
}
