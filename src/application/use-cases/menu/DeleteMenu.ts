import { DeleteMenuRepository } from "@application/interfaces/repositories/Menu/DeleteMenuRepository";
import { DeleteMenuInterface } from "@application/interfaces/use-cases/menu/DeleteMenuInterface";

export class DeleteMenu implements DeleteMenuInterface {
    constructor(private readonly deleteMenuRepository: DeleteMenuRepository) {}
    execute(
      MenuId: DeleteMenuInterface.Request
    ): Promise<DeleteMenuInterface.Response> {
      return this.deleteMenuRepository.deleteMenu(MenuId);
    }
  }