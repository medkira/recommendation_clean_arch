import { BaseController } from "@infra/http/controllers/BaseController";
import { DeletePostController } from "@infra/http/controllers/posts/DeletePostController";
import { makeDeletePost } from "@main/factories/use-case/post/delete-post-factory";
import { makeGetPostById } from "@main/factories/use-case/post/get-post-by-id-factory";

export const makeDeletePostController = (): BaseController => {
  const getPostByIdUseCase = makeGetPostById();
  const deletePostUseCase = makeDeletePost();
  return new DeletePostController(getPostByIdUseCase, deletePostUseCase);
};
