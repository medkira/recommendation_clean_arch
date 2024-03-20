import { MenuNotFoundError } from "@application/errors/MenuNotFoundError";
import { GetMenuByIdInterface } from "@application/interfaces/use-cases/menu/GetMenuByIdInterface";
import { GetMenuByIdRepository } from "@application/interfaces/repositories/Menu/GetMenuByIdRepository";

export class GetMenuById implements GetMenuByIdInterface {
    constructor(private readonly GetMenuByIdRepository: GetMenuByIdRepository) { }
    async execute(
      MenuId: GetMenuByIdInterface.Request
    ): Promise<GetMenuByIdInterface.Response> {
      const menu = await this.GetMenuByIdRepository.getMenuById(MenuId);
      if (!menu) {
        return new MenuNotFoundError();
      }
      return menu;
    }
  }
  