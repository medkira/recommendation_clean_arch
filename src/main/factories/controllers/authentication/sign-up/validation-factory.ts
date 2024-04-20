import { Owner } from "@domain/entities/Owner";
import { UserRole } from "@domain/entities/User";
import { EmailValidation } from "@infra/http/validation/EmailValidation";
import { RequiredFieldValidation } from "@infra/http/validation/RequiredFieldValidation";
import { RequiredFieldValidationByRole } from "@infra/http/validation/RequiredFieldValidationByRole";
import { ValidationComposite } from "@infra/http/validation/ValidationComposite";
import { EmailValidatorAdapter } from "@infra/http/validator/EmailValidatorAdapter";
export const makeSignUpValidation = (): ValidationComposite => {
    const emailValidator = new EmailValidatorAdapter();

    return new ValidationComposite([
        // new RequiredFieldValidation('name'),
        new RequiredFieldValidation('username'),
        // new RequiredFieldValidationByRole(UserRole.OWNER, 'places'),
        // new RequiredFieldValidationByRole(UserRole.NORMAL, 'jobTitle'),
        new RequiredFieldValidation('email'),
        new RequiredFieldValidation('password'),
        new EmailValidation('email', emailValidator),
    ], 'body');
}