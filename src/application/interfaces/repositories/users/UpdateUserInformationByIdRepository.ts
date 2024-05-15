import { NormalUser, NormalUserProps } from "@domain/entities/NormalUser";
import { Post } from "@domain/entities/Post";

export interface UpdateUserInformationByIdRepository {
    UpdateUserInformation(
        params: UpdateUserInformationByIdRepository.Request
    ): Promise<UpdateUserInformationByIdRepository.Response>;
}

export namespace UpdateUserInformationByIdRepository {
    export type UserDataType = Partial<
        Omit<
            NormalUserProps,
            "id" | "userId" | "createdAt" | "updatedAt" | "password"
        >
    >;
    export type Request = { userId: string; UserData: UserDataType };
    export type Response = NormalUser;
}
