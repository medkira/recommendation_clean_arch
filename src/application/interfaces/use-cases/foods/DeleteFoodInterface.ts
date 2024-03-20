import { UseCase } from "../UseCase";





export interface DeleteFoodInterface extends UseCase<DeleteFoodInterface.Request, DeleteFoodInterface.Response> {
    execute(foodId: DeleteFoodInterface.Request): Promise<DeleteFoodInterface.Response>;
}

export namespace DeleteFoodInterface {
    export type Request = string;
    export type Response = void;
}