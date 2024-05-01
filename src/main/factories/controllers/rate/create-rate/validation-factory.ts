import { RequiredFieldValidation } from "@infra/http/validation/RequiredFieldValidation";
import { ValidationComposite } from "@infra/http/validation/ValidationComposite";

export const createRateValidation = (): ValidationComposite => {
    return new ValidationComposite(
        [
            new RequiredFieldValidation("rate"),
            new RequiredFieldValidation("review"),

        ],
        "body"
    );
};
