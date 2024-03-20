import { MenuProps, Menu } from "@domain/entities/Menu";

export interface UpdateMenuRepository {
    updateMenu(
      params: UpdateMenuRepository.Request
    ): Promise<UpdateMenuRepository.Response>;
  }
  
  export namespace UpdateMenuRepository {
    export type MenuDataType = Omit<MenuProps, "id" | "food_ids" | "place_id">;
    export type Request = {
      MenuId: string;
      MenuData: MenuDataType;
    };
    export type Response = Menu;
  }
  