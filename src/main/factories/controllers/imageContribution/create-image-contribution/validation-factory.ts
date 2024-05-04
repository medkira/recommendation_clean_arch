import { RequiredFieldValidation } from "@infra/http/validation/RequiredFieldValidation";
import { ValidationComposite } from "@infra/http/validation/ValidationComposite";



export const makeCreateImageContributionValidation = (): ValidationComposite => {
    return new ValidationComposite([
        // new RequiredFieldValidation('title'),
        // new RequiredFieldValidation('content'),
        // new RequiredFieldValidation('post_type'),
    ], 'body');
}