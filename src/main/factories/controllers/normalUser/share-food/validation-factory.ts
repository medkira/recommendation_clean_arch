import { EmailValidation } from "@infra/http/validation/EmailValidation";
import { RequiredFieldValidation } from "@infra/http/validation/RequiredFieldValidation";
import { ValidationComposite } from "@infra/http/validation/ValidationComposite";
import { EmailValidatorAdapter } from "@infra/http/validator/EmailValidatorAdapter";

export const makeShareValidation = (): ValidationComposite => {
  const emailValidator = new EmailValidatorAdapter();

  return new ValidationComposite(
    [
      new EmailValidation("from", emailValidator),
      new EmailValidation("to", emailValidator),
    ],
    "body"
  );
};
