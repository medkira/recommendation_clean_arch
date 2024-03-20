import { Post } from "@domain/entities/Post";

export interface CreatePostRepository {
  createPost(
    postData: CreatePostRepository.Request
  ): Promise<CreatePostRepository.Response>;
}

export namespace CreatePostRepository {
  export type Request = Omit<
    Post,
    "id" | "createdAt" | "updatedAt" | "totalComments"
  >;
  export type Response = string;
}
