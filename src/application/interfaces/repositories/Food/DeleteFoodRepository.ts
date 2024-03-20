export interface DeleteFoodRepository {
    deleteFood(foodId: DeleteFoodRepository.Request): Promise<DeleteFoodRepository.Response>;

}

export namespace DeleteFoodRepository {
    export type Request = string;
    export type Response = void;

}
