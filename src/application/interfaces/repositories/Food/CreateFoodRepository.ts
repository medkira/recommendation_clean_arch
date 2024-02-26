import { Food } from "@domain/entities/Food"

export interface CreateFoodRepository {
    createFood(foodDate: CreateFoodRepository.Request): Promise<CreateFoodRepository.Response>;

}

export namespace CreateFoodRepository {
    export type Request = Pick<Food, 'name' | 'price'>;
    export type Response = string;

}