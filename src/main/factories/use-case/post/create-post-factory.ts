import { CreatePostInterface } from "@application/interfaces/use-cases/posts/CreatePostInterface";
import { CreatePost } from "@application/use-cases/post/CreatePost";
import { PostRepository } from "@infra/db/mongodb/repositories/PostRepository";
import { ImageProcessAdapter } from "@infra/utils/image-processing/ImageProcessAdapter";
import { UploadAdapter } from "@infra/utils/upload/UploadAdapter";

export const makeCreatePost = (): CreatePostInterface => {
  const postRepository = new PostRepository();
  const uploadAdapter = new UploadAdapter();
  const imageProcessAdapter = new ImageProcessAdapter();
  return new CreatePost(postRepository, uploadAdapter, imageProcessAdapter);
};
