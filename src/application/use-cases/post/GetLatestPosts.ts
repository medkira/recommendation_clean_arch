import { GetLatestPostsRepository } from "@application/interfaces/repositories/post/GetLatestPostRepository";
import { GetLatesPostsInterface } from "@application/interfaces/use-cases/posts/GetLatestPostsInterface";

export class GetLatesPosts implements GetLatesPostsInterface {
  constructor(
    private readonly getLatesrPostsRepository: GetLatestPostsRepository
  ) { }
  async execute(
    params: GetLatesPostsInterface.Request
  ): Promise<GetLatesPostsInterface.Response> {
    const { page = 1, type, title } = params;
    const paginationLimit = 5;

    return this.getLatesrPostsRepository.getLatestPosts({
      page,
      paginationLimit,
      query: {
        ...(type && { type }),
        ...(title && { title }),
      },
    });
  }
}
