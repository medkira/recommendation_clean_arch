import { UseCase } from "../UseCase";
import { EmailInUseError } from "@application/errors/EmailInUseError";
import { NormalUserProps } from "@domain/entities/NormalUser";

export interface SignUpNormalUserInterface extends UseCase<SignUpNormalUserInterface.Request, SignUpNormalUserInterface.Response> {
    execute(userData: SignUpNormalUserInterface.Request): Promise<SignUpNormalUserInterface.Response>
}


export namespace SignUpNormalUserInterface {
    export type Request = Omit<NormalUserProps, 'id' | 'createdAt' | 'updatedAt'>
    export type Response = Pick<NormalUserProps, 'id'> | EmailInUseError;
}