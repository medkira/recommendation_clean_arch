import { BaseController } from "@infra/http/controllers/BaseController";
import { DeleteUserController } from "@infra/http/controllers/user/DeletUserController";
import { makeDeletUser } from "@main/factories/use-case/user/delete-user-factory";
import { makeLoadUserById } from "@main/factories/use-case/user/load-user-by-id-factory";

export const makeDeleteUserController = (): BaseController => {
    const loadUser = makeLoadUserById();
    const deleteUser = makeDeletUser();
    return new DeleteUserController(loadUser, deleteUser);
}