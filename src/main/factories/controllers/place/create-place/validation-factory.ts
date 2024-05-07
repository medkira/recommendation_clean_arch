import { RequiredFieldValidation } from "@infra/http/validation/RequiredFieldValidation";
import { ValidationComposite } from "@infra/http/validation/ValidationComposite";

export const createPlaceValidation = (): ValidationComposite => {
  return new ValidationComposite(
    [
      new RequiredFieldValidation("name"),
      new RequiredFieldValidation("type"),
      new RequiredFieldValidation("location"),
      new RequiredFieldValidation("description"),
      // new RequiredFieldValidation("url"),
    ],
    "body"
  );
};
