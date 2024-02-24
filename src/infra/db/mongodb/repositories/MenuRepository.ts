import { CreateMenuRepository } from "@application/interfaces/repositories/Menu/CreateMenuRepository";
import { Menu } from "@domain/entities/Menu";
import menuModel from "../models/menu.model";
import { objectIdToString } from "../helpers/mappers";

export class MenuRepository implements CreateMenuRepository {
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
