import { CreatePostInterface } from "@application/interfaces/use-cases/posts/CreatePostInterface";
import { CreatePost } from "@application/use-cases/post/CreatePost";
import { LoadUserById } from "@application/use-cases/users/LoadUserById";
import { NormalUserRepository } from "@infra/db/mongodb/repositories/NormalUserRepository";
import { OwnerRepository } from "@infra/db/mongodb/repositories/OwnerRepository";
import { PostRepository } from "@infra/db/mongodb/repositories/PostRepository";
import { ImageProcessAdapter } from "@infra/utils/image-processing/ImageProcessAdapter";
import { UploadAdapter } from "@infra/utils/upload/UploadAdapter";

export const makeCreatePost = (): CreatePostInterface => {
  const postRepository = new PostRepository();
  const uploadAdapter = new UploadAdapter();
  const imageProcessAdapter = new ImageProcessAdapter();

  return new CreatePost(postRepository, uploadAdapter, imageProcessAdapter);
};
