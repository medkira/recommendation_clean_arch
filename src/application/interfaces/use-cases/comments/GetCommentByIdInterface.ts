import { CommentNotFoundError } from "@application/errors/CommentNotFoundError";
import { UseCase } from "../UseCase";
import { Comment } from "@domain/entities/Comment";

export interface GetCommentByIdInterface extends UseCase<GetCommentByIdInterface.Request, GetCommentByIdInterface.Response> {
    execute(commentId: GetCommentByIdInterface.Request): Promise<GetCommentByIdInterface.Response>
}

export namespace GetCommentByIdInterface {
    export type Request = string;
    export type Response = Comment | CommentNotFoundError;
}