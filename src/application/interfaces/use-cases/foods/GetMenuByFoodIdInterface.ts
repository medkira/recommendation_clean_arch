import { Menu } from "@domain/entities/Menu";
import { UseCase } from "../UseCase";
import { MenuNotFoundError } from "@application/errors/MenuNotFoundError";



export interface GetMenuByFoodIdInterface
  extends UseCase<GetMenuByFoodIdInterface.Request, GetMenuByFoodIdInterface.Response> {
  execute(
    FoodId: GetMenuByFoodIdInterface.Request
  ): Promise<GetMenuByFoodIdInterface.Response>;
}

export namespace GetMenuByFoodIdInterface {
  export type Request = string;
  export type Response = Menu | MenuNotFoundError;
}
