import validator from "validator";
import { EmailValidator } from "./interfaces/EmailValidator";

export class EmailValidatorAdapter implements EmailValidator {
    isValid(email: string): boolean {
        return validator.default.isEmail(email);
    }

}