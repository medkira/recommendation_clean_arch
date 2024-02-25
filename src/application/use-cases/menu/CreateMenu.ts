import { CreateMenuInterface } from "@application/interfaces/use-cases/menu/CreateMenuInterface";
import { CreateMenuRepository } from "@application/interfaces/repositories/Menu/CreateMenuRepository";

export class CreateMenu implements CreateMenuInterface {
  constructor(private readonly CreateMenuRepository: CreateMenuRepository) {}
  async execute(
    MenuData: CreateMenuInterface.Request
  ): Promise<CreateMenuInterface.Response> {
    return this.CreateMenuRepository.createMenu(MenuData);
  }
}
