import { BaseController } from "@infra/http/controllers/BaseController";
import { CreateRateController } from "@infra/http/controllers/rate/CreateRateControler";
import { createRateValidation } from "./validation-factory";
import { makeCreateRate } from "@main/factories/use-case/rate/create-rate-factory";

export const makeCreateRateController = (): BaseController => {
    const validation = createRateValidation();
    const useCase = makeCreateRate();
    return new CreateRateController(validation, useCase);
};
