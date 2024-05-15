import { BaseController } from "@infra/http/controllers/BaseController"
import { GetUserByIdController } from "@infra/http/controllers/user/GetUserByIdController"
import { makeLoadUserById } from "@main/factories/use-case/user/load-user-by-id-factory"

export const makeGetUserByIdController = (): BaseController => {
    const getUserById = makeLoadUserById();

    return new GetUserByIdController(getUserById)
}