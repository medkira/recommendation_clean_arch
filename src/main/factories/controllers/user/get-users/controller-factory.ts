import { BaseController } from "@infra/http/controllers/BaseController";
import { GetUsersontroller } from "@infra/http/controllers/user/GetUsersController";
import { makeGetUsers } from "@main/factories/use-case/user/get-user-factory";

export const makeGetUsersController = (): BaseController => {
    const getUsers = makeGetUsers();
    return new GetUsersontroller(getUsers);
}