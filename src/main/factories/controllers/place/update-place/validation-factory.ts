import { RequiredAtLeastOneFieldValidation } from "@infra/http/validation/RequiredAtLeastOneFieldValidation";
import { ValidationComposite } from "@infra/http/validation/ValidationComposite";
import { Validation } from "@infra/http/validation/interface/Validation";

export const makeUpdatePlaceValidation = (): ValidationComposite => {
  return new ValidationComposite(
    [
      new RequiredAtLeastOneFieldValidation([
        "name",
        "type",
        "location",
        "description",
        "url",
        "placeImage"
      ]),
    ],
    "body"
  );
};
