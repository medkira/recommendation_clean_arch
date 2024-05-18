import { UseCase } from "../UseCase";

export interface VerfifyUserEmailByIdInterface extends UseCase<VerfifyUserEmailByIdInterface.Request, VerfifyUserEmailByIdInterface.Response> {
    execute(
        id: VerfifyUserEmailByIdInterface.Request
    ): Promise<VerfifyUserEmailByIdInterface.Response>
}

export namespace VerfifyUserEmailByIdInterface {
    export type Request = string;
    export type Response = void;
}