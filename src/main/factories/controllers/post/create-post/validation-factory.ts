import { RequiredFieldValidation } from "@infra/http/validation/RequiredFieldValidation";
import { ValidationComposite } from "@infra/http/validation/ValidationComposite";



export const makeCreatePostValidation = (): ValidationComposite => {
    return new ValidationComposite([
        new RequiredFieldValidation('rate'),
        new RequiredFieldValidation('content'),
        new RequiredFieldValidation('post_type'),
    ], 'body');
}