import { UseCase } from "../UseCase";
import { Owner } from "@domain/entities/Owner";
import { NormalUser, NormalUserProps } from "@domain/entities/NormalUser";
import { UserNotFoundError } from "@application/errors/UserNotFoundError";

export interface UpdateUserInformationByIdInterface extends UseCase<UpdateUserInformationByIdInterface.Request, UpdateUserInformationByIdInterface.Response> {
    execute(
        id: UpdateUserInformationByIdInterface.Request
    ): Promise<UpdateUserInformationByIdInterface.Response>
}

export namespace UpdateUserInformationByIdInterface {
    export type UserDataType = Partial<
        Omit<
            NormalUserProps,
            "id" | "userId" | "createdAt" | "updatedAt" | "password"
        >
    >;
    export type Request = { userId: string; UserData: UserDataType };
    export type Response = Owner | NormalUser | UserNotFoundError;
}