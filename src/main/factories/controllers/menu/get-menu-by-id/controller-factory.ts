import { BaseController } from "@infra/http/controllers/BaseController";
import { GetMenuByIdController } from "@infra/http/controllers/menu/GetMenuByIdController";
import { makeGetMenuById } from "@main/factories/use-case/menu/get-menu-by-id-factory";



export const makeGetMenuByIdController = (): BaseController => {
    const getMenuByIdUseCase = makeGetMenuById();
    return new GetMenuByIdController(getMenuByIdUseCase);
  };
  