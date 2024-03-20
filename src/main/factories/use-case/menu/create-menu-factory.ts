import { CreateMenuInterface } from "@application/interfaces/use-cases/menu/CreateMenuInterface";
import { CreateMenu } from "@application/use-cases/menu/CreateMenu";
import { MenuRepository } from "@infra/db/mongodb/repositories/MenuRepository";




export const makeCreateMenu = (): CreateMenuInterface => {
    const menuRepository = new MenuRepository();

    return new CreateMenu(menuRepository);
}