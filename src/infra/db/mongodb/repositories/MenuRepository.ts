import { CreateMenuRepository } from "@application/interfaces/repositories/Menu/CreateMenuRepository";
import { Menu } from "@domain/entities/Menu";
import menuModel from "../models/menu.model";
import {
  isValidObjectId,
  mapDocument,
  objectIdToString,
  stringToObjectId,
} from "../helpers/mappers";
import { GetMenuByIdRepository } from "@application/interfaces/repositories/Menu/GetMenuByIdRepository";
import { DeleteMenuRepository } from "@application/interfaces/repositories/Menu/DeleteMenuRepository";

export class MenuRepository
  implements CreateMenuRepository, GetMenuByIdRepository, DeleteMenuRepository
{
  async getMenuById(MenuId: string): Promise<GetMenuByIdRepository.Response> {
    if (!isValidObjectId(MenuId)) {
      return null;
    }

    const rawMenu = await menuModel.findById(MenuId);
    return rawMenu && mapDocument(rawMenu);
  }
  async deleteMenu(menuId: string): Promise<void> {
    await menuModel.findOneAndDelete(stringToObjectId(menuId));
  }
  async createMenu(
    MenuData: CreateMenuRepository.Request
  ): Promise<CreateMenuRepository.Response> {
    const menu = new menuModel({
      ...MenuData,
    });
    const savedMenu = await menu.save();
    const menuId = objectIdToString(savedMenu._id);

    return menuId;
  }
}
