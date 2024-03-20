import { MenuNotFoundError } from "@application/errors/MenuNotFoundError";
import { Menu, MenuProps } from "@domain/entities/Menu";
import { UseCase } from "../UseCase";



export interface GetMenuByIdInterface
  extends UseCase<GetMenuByIdInterface.Request, GetMenuByIdInterface.Response> {
  execute(menuId: GetMenuByIdInterface.Request): Promise<GetMenuByIdInterface.Response>;
}

export namespace GetMenuByIdInterface {
  export type Request = string;
  export type Response = Menu | MenuNotFoundError;
}