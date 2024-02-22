import { CommentProps } from "@domain/entities/Comment.js";
import { UseCase } from "../UseCase.js";

export interface CreateCommentInterface extends UseCase<CreateCommentInterface.Request, CreateCommentInterface.Response> {
    execute(commentData: CreateCommentInterface.Request): Promise<CreateCommentInterface.Response>;
}

export namespace CreateCommentInterface {
    export type Request = Omit<CommentProps, 'id' | 'updatedAt' | 'createdAt'>
    export type Response = string;
}