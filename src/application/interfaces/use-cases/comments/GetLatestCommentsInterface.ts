import { UseCase } from "../UseCase";
import { Comment } from "@domain/entities/Comment";


export interface GetLatesCommentsInterface extends UseCase<GetLatesCommentsInterface.Request, GetLatesCommentsInterface.Response> {
    execute(params: GetLatesCommentsInterface.Request): Promise<GetLatesCommentsInterface.Response>;
}

export namespace GetLatesCommentsInterface {
    export type Request = { page?: number, postId: string };
    export type Response = { data: Comment[], page: number, total: number, totalPages: number };
}