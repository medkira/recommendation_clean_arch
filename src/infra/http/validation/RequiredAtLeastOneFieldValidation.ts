import { MissingParamError } from "../errors/MissingParamError";
import { Validation } from "./interface/Validation";

export class RequiredAtLeastOneFieldValidation implements Validation {
  constructor(private readonly fieldNames: string[]) {}
  validate(input: any): Error | null {
    const hasAtLeastOneField = this.fieldNames.some(
      (filedName) => input[filedName] !== undefined
    );

    if (!hasAtLeastOneField) {
      const errorMessage = `Missing parameter(s): ${this.fieldNames.join(
        " || "
      )}`;
      return new MissingParamError(errorMessage);
    }

    return null;
  }
}
