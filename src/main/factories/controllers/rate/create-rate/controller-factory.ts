import { BaseController } from "@infra/http/controllers/BaseController";
import { CreateRateController } from "@infra/http/controllers/rate/CreateRateControler";
import { createRateValidation } from "./validation-factory";
import { makeCreateRate } from "@main/factories/use-case/rate/create-rate-factory";
import { makeGetPlaceById } from "@main/factories/use-case/place/get-place-by-id-factory";
import { makeLoadUserById } from "@main/factories/use-case/user/load-user-by-id-factory";

export const makeCreateRateController = (): BaseController => {
    const validation = createRateValidation();
    const createRate = makeCreateRate();
    const getPlaceById = makeGetPlaceById();
    const loadUserById = makeLoadUserById();
    return new CreateRateController(validation, createRate, getPlaceById, loadUserById);
};
