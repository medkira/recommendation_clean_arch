import { RequiredAtLeastOneFieldValidation } from "@infra/http/validation/RequiredAtLeastOneFieldValidation";
import { ValidationComposite } from "@infra/http/validation/ValidationComposite";



export const makeUpdateFoodValidation = (): ValidationComposite => {
    return new ValidationComposite(
      [
        new RequiredAtLeastOneFieldValidation([
          "name",
          "price",
          "food_type"
        ]),
      ],
      "body"
    );
  };
  