import { BaseController } from "@infra/http/controllers/BaseController";
import { GetLatestPostsController } from "@infra/http/controllers/posts/GetLatestPostsController";
import { makeGetLatestPosts } from "@main/factories/use-case/post/get-latest-post-factory";

export const makeGetLatestPostsController = (): BaseController => {
  const getLatestPosts = makeGetLatestPosts();

  return new GetLatestPostsController(getLatestPosts);
};
