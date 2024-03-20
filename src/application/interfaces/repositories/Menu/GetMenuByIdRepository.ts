import { Menu } from "@domain/entities/Menu";

export interface GetMenuByIdRepository {
  getMenuById(
    MenuId: GetMenuByIdRepository.Request
  ): Promise<GetMenuByIdRepository.Response>;
}

export namespace GetMenuByIdRepository {
  export type Request = string;
  export type Response = Menu | null;
}
