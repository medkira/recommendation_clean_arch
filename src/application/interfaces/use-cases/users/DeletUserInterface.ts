import { UseCase } from "../UseCase";

export interface DeletUserInterface
    extends UseCase<DeletUserInterface.Request, DeletUserInterface.Response> {
    execute(
        userId: DeletUserInterface.Request
    ): Promise<DeletUserInterface.Response>;
}

export namespace DeletUserInterface {
    export type Request = string;
    export type Response = void;
}
