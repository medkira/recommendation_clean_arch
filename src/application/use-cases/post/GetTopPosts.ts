import { GetTopPostsInterface } from "@application/interfaces/use-cases/posts/GetTopPotsInterface";
import { GetTopPostsRepository } from "@application/interfaces/repositories/post/GetTopPostsRepository";

export class GetTopPosts implements GetTopPostsInterface {
  constructor(private readonly getTopPosts: GetTopPostsRepository) {}
  async execute(
    params: GetTopPostsInterface.Request
  ): Promise<GetTopPostsInterface.Response> {
    const { sortBy, limit } = params;
    return this.getTopPosts.getTopPosts({ sortBy, limit });
  }
}
