import { UserRole } from "@domain/entities/User";
import { MissingParamError } from "../errors/MissingParamError";
import { Validation } from "./interface/Validation";
import { Owner } from "@domain/entities/Owner";

export class RequiredFieldValidationByRole implements Validation {
    constructor(
        private readonly role: string,
        private readonly fieldName: string,
    ) { }
    validate(input: any): Error | null {

        // const allowedRoles = [UserRole.ADMIN, UserRole.OWNER];


        if (input.role === this.role) {
            if (!input[this.fieldName]) {
                return new MissingParamError(this.fieldName);
            }
        }


        return null;
    }

}