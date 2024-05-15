import { BaseController } from "@infra/http/controllers/BaseController";
import { UpdateUserInformationByIdCntroller } from "@infra/http/controllers/user/UpdateUserInformationByIdCntroller";
import { makeUpdateUserInforamtionById } from "@main/factories/use-case/user/update-user-inforamtion-by-id-factory";
import { makeUpdateUserInformationValidation } from "./validation-facotry";

export const makeUpdateUserInformationController = (): BaseController => {
    const validation = makeUpdateUserInformationValidation()
    const updateUserInformationById = makeUpdateUserInforamtionById();



    return new UpdateUserInformationByIdCntroller(validation, updateUserInformationById)
}