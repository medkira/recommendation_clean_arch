import { Post } from "@domain/entities/Post";
import { UseCase } from "../UseCase";

export interface GetTopPostsInterface
  extends UseCase<GetTopPostsInterface.Request, GetTopPostsInterface.Response> {
  execute(
    params: GetTopPostsInterface.Request
  ): Promise<GetTopPostsInterface.Response>;
}

export namespace GetTopPostsInterface {
  export type Request = { sortBy: string; limit: number };
  export type Response = { data: Post[] };
}
