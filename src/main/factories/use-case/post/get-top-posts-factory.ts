import { GetTopPostsInterface } from "@application/interfaces/use-cases/posts/GetTopPotsInterface";
import { GetTopPosts } from "@application/use-cases/post/GetTopPosts";
import { PostRepository } from "@infra/db/mongodb/repositories/PostRepository";



export const makeGetTopPosts = (): GetTopPostsInterface => {
    const postRepository = new PostRepository();
    return new GetTopPosts(postRepository);
  };
  