import { Owner } from "@domain/entities/Owner";
import { UserRole } from "@domain/entities/User";
import { EmailValidation } from "@infra/http/validation/EmailValidation";
import { RequiredFieldValidation } from "@infra/http/validation/RequiredFieldValidation";
import { ValidationComposite } from "@infra/http/validation/ValidationComposite";
import { EmailValidatorAdapter } from "@infra/http/validator/EmailValidatorAdapter";
export const makeSendEmailResetPasswordValidation = (): ValidationComposite => {
    const emailValidator = new EmailValidatorAdapter();

    return new ValidationComposite([
        new RequiredFieldValidation('email'),
        new EmailValidation('email', emailValidator),
    ], 'body');
}