import { Food } from "@domain/entities/Food";
import { UseCase } from "../UseCase";

export interface CreateFoodInterface extends UseCase<CreateFoodInterface.Request, CreateFoodInterface.Response> {
    execute(foodData: CreateFoodInterface.Request): Promise<CreateFoodInterface.Response>;
}

export namespace CreateFoodInterface {
    export type Request = Pick<Food, 'name' | 'price'>;
    export type Response = string;
}