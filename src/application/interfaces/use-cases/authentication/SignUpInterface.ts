import { UserProps } from "@domain/entities/User";
import { UseCase } from "../UseCase";
import { EmailInUseError } from "@application/errors/EmailInUseError";

export interface SignUpInterface extends UseCase<SignUpInterface.Request, SignUpInterface.Response> {
    execute(userData: SignUpInterface.Request): Promise<SignUpInterface.Response>
}


export namespace SignUpInterface {
    export type Request = Omit<UserProps, 'id' | 'createdAt' | 'updatedAt'>
    export type Response = Pick<UserProps, 'id'> | EmailInUseError;
}