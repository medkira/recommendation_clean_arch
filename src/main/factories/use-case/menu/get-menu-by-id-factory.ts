import { GetMenuByIdInterface } from "@application/interfaces/use-cases/menu/GetMenuByIdInterface";
import { GetMenuById } from "@application/use-cases/menu/GetMenuById";
import { MenuRepository } from "@infra/db/mongodb/repositories/MenuRepository";

export const makeGetMenuById = (): GetMenuByIdInterface => {
  const menuRepository = new MenuRepository();
  return new GetMenuById(menuRepository);
};
