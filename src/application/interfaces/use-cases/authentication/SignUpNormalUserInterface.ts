import { UseCase } from "../UseCase";
import { EmailInUseError } from "@application/errors/EmailInUseError";
import { NormalUser, NormalUserProps } from "@domain/entities/NormalUser";

export interface SignUpNormalUserInterface extends UseCase<SignUpNormalUserInterface.Request, SignUpNormalUserInterface.Response> {
    execute(userData: SignUpNormalUserInterface.Request): Promise<SignUpNormalUserInterface.Response>
}


export namespace SignUpNormalUserInterface {
    export type Request = Omit<NormalUser, 'id' | 'createdAt' | 'updatedAt' | 'isEmailVerified'>
    export type Response = Pick<NormalUser, 'id'> | EmailInUseError;
}