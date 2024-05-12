import { CreateMenuInterface } from "@application/interfaces/use-cases/menu/CreateMenuInterface";
import { CreateMenu } from "@application/use-cases/menu/CreateMenu";
import { MenuRepository } from "@infra/db/mongodb/repositories/MenuRepository";
import { ImageProcessAdapter } from "@infra/utils/image-processing/ImageProcessAdapter";
import { UploadAdapter } from "@infra/utils/upload/UploadAdapter";




export const makeCreateMenu = (): CreateMenuInterface => {
    const menuRepository = new MenuRepository();
    const uploadAdapter = new UploadAdapter();
    const imageProcessAdapter = new ImageProcessAdapter();

    return new CreateMenu(menuRepository, uploadAdapter, imageProcessAdapter);
}