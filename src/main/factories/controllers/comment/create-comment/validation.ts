import { RequiredFieldValidation } from "@infra/http/validation/RequiredFieldValidation";
import { ValidationComposite } from "@infra/http/validation/ValidationComposite";

export const makeCreateCommentValidation = (): ValidationComposite => {
  return new ValidationComposite(
    [
      // new RequiredFieldValidation("title"),
      new RequiredFieldValidation("text"),
      new RequiredFieldValidation("postId"),
      // new RequiredFieldValidation("userId"),
    ],
    "body"
  );
};
