import { UseCase } from "../UseCase.js";

export interface UpdatePostTotalCommentsInterface extends UseCase<UpdatePostTotalCommentsInterface.Request, UpdatePostTotalCommentsInterface.Response> {
    execute(postId: UpdatePostTotalCommentsInterface.Request): Promise<UpdatePostTotalCommentsInterface.Response>
}

export namespace UpdatePostTotalCommentsInterface {
    export type Request = string;
    export type Response = void;
} 