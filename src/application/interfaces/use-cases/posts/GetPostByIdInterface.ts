import { UseCase } from "../UseCase.js";
import { Post } from "@domain/entities/Post.js";
import { PostNotFoundError } from "@application/errors/PostNotFoundError.js";

export interface GetPostByIdInterface extends UseCase<GetPostByIdInterface.Request, GetPostByIdInterface.Response> {
    execute(postId: GetPostByIdInterface.Request): Promise<GetPostByIdInterface.Response>
}

export namespace GetPostByIdInterface {
    export type Request = string;
    export type Response = Post | PostNotFoundError;
}