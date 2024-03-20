import { RequiredAtLeastOneFieldValidation } from "@infra/http/validation/RequiredAtLeastOneFieldValidation";
import { ValidationComposite } from "@infra/http/validation/ValidationComposite";

export const makeUpdatePostValidation = (): ValidationComposite => {
  return new ValidationComposite(
    [new RequiredAtLeastOneFieldValidation(["title","content", "post_type","postImage"])],
    "body"
  );
};
