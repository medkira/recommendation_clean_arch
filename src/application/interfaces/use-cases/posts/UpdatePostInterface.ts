import { Post, PostProps } from "@domain/entities/Post.js";
import { UseCase } from "../UseCase.js";
import { PostNotFoundError } from "@application/errors/PostNotFoundError.js";

export interface UpdatePostInterface
  extends UseCase<UpdatePostInterface.Request, UpdatePostInterface.Rsponse> {
  execute(
    params: UpdatePostInterface.Request
  ): Promise<UpdatePostInterface.Rsponse>;
}

export namespace UpdatePostInterface {
  export type PostDataType = Partial<
    Omit<Post, "id" | "userId" | "createdAt" | "updatedAt">
  >;
  export type Request = { postId: string; postData: PostDataType };
  export type Rsponse = Post | PostNotFoundError;
}
