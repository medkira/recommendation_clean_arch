import { RequiredAtLeastOneFieldValidation } from "@infra/http/validation/RequiredAtLeastOneFieldValidation";
import { ValidationComposite } from "@infra/http/validation/ValidationComposite";



export const makeUpdateUserInformationValidation = (): ValidationComposite => {
    return new ValidationComposite(
        [
            new RequiredAtLeastOneFieldValidation([
                "address", "email", "image", "jobTitle", "salary", "username",
                "socialStatus", "phoneNumber",
            ]),
        ],
        "body"
    );
};
