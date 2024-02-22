import { CommentNotFoundError } from "@application/errors/CommentNotFoundError.js";
import { UseCase } from "@application/interfaces/use-cases/UseCase.js";
import { Comment } from "@domain/entities/Comment.js";

export interface GetCommentByIdInterface extends UseCase<GetCommentByIdInterface.Request, GetCommentByIdInterface.Response> {
    execute(commentId: GetCommentByIdInterface.Request): Promise<GetCommentByIdInterface.Response>
}

export namespace GetCommentByIdInterface {
    export type Request = string;
    export type Response = Comment | CommentNotFoundError;
}