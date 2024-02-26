import { Menu, MenuProps } from "@domain/entities/Menu";

export interface CreateMenuRepository {
  createMenu(
    MenuData: CreateMenuRepository.Request
  ): Promise<CreateMenuRepository.Response>;
}

export namespace CreateMenuRepository {
  export type Request = Pick<MenuProps, "place_id" | "food_ids">;
  export type Response = string;
}
