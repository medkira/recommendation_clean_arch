import { RequiredFieldValidation } from "@infra/http/validation/RequiredFieldValidation";
import { ValidationComposite } from "@infra/http/validation/ValidationComposite";

export const autoCompletePlaceSearchValidation = (): ValidationComposite => {
  return new ValidationComposite(
    [
      new RequiredFieldValidation("query"),

    ],
    "query"
  );
};
