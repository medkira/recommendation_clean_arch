import { Post } from "@domain/entities/Post";
import { UseCase } from "../UseCase";

export interface CreatePostInterface
  extends UseCase<CreatePostInterface.Request, CreatePostInterface.Response> {
  execute(
    postData: CreatePostInterface.Request
  ): Promise<CreatePostInterface.Response>;
}

export namespace CreatePostInterface {
  export type Request = Omit<Post, "id" | "createdAt" | "updatedAt" | "totalComments">;
  export type Response = string;
}
