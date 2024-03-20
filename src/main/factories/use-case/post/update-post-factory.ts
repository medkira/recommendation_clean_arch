import { UpdatePostInterface } from "@application/interfaces/use-cases/posts/UpdatePostInterface";
import { UpdatePost } from "@application/use-cases/post/UpdatePost";
import { PostRepository } from "@infra/db/mongodb/repositories/PostRepository";
import { ImageProcessAdapter } from "@infra/utils/image-processing/ImageProcessAdapter";
import { UploadAdapter } from "@infra/utils/upload/UploadAdapter";

export const makeUpdatePost = (): UpdatePostInterface => {
  const postRepository = new PostRepository();
  const uploadAdapter = new UploadAdapter();
  const imageProcess = new ImageProcessAdapter();
  return new UpdatePost(
    postRepository,
    postRepository,
    uploadAdapter,
    imageProcess
  );
};
