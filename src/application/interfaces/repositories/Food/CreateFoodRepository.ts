import { Food, FoodProps } from "@domain/entities/Food"

export interface CreateFoodRepository {
    createFood(foodData: CreateFoodRepository.Request): Promise<CreateFoodRepository.Response>;

}

export namespace CreateFoodRepository {
    export type Request = Omit<FoodProps, "id" | "menu_id">
    export type Response = string;

}

