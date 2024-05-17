import { UseCase } from "../UseCase";
import { Owner } from "@domain/entities/Owner";
import { NormalUser } from "@domain/entities/NormalUser";
import { UserNotFoundError } from "@application/errors/UserNotFoundError";

export interface LoadUserByIdInterface extends UseCase<LoadUserByIdInterface.Request, LoadUserByIdInterface.Response> {
    execute(
        id: LoadUserByIdInterface.Request
    ): Promise<LoadUserByIdInterface.Response>
}

export namespace LoadUserByIdInterface {
    export type Request = string;
    export type Response = NormalUser | UserNotFoundError;
}