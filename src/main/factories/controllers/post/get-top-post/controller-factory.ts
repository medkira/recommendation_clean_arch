import { BaseController } from "@infra/http/controllers/BaseController";
import { GetTopPostsController } from "@infra/http/controllers/posts/GetTopPostscontroller";
import { makeGetTopPosts } from "@main/factories/use-case/post/get-top-posts-factory";


export const makeGetTopPostsController = (): BaseController => {
    const usecase = makeGetTopPosts();
    return new GetTopPostsController(usecase);
  };
  