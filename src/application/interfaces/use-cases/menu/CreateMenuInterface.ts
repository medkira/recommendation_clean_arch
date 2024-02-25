import { Menu, MenuProps } from "@domain/entities/Menu";
import { UseCase } from "../UseCase";

export interface CreateMenuInterface
  extends UseCase<CreateMenuInterface.Request, CreateMenuInterface.Response> {
  execute(
    menuData: CreateMenuInterface.Request
  ): Promise<CreateMenuInterface.Response>;
}

export namespace CreateMenuInterface {
  export type Request = Pick<MenuProps, "place_id" | "foods_id">;
  export type Response = string;
}
