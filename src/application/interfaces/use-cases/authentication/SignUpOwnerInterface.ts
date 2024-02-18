import { OwnerProps } from "@domain/entities/Owner";
import { UseCase } from "../UseCase";
import { EmailInUseError } from "@application/errors/EmailInUseError";

export interface SignUpOwnerInterface extends UseCase<SignUpOwnerInterface.Request, SignUpOwnerInterface.Response> {
    execute(userData: SignUpOwnerInterface.Request): Promise<SignUpOwnerInterface.Response>
}


export namespace SignUpOwnerInterface {
    export type Request = Omit<OwnerProps, 'id' | 'createdAt' | 'updatedAt'>
    export type Response = Pick<OwnerProps, 'id'> | EmailInUseError;
}