import { GetLatesPostsInterface } from "@application/interfaces/use-cases/posts/GetLatestPostsInterface";
import { GetLatesPosts } from "@application/use-cases/post/GetLatestPosts";
import { PostRepository } from "@infra/db/mongodb/repositories/PostRepository";




export const makeGetLatestPosts = (): GetLatesPostsInterface => {
    const postRepository = new PostRepository();
    return new GetLatesPosts(postRepository);
}