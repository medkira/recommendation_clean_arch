import { BaseController } from "@infra/http/controllers/BaseController";
import { UpdatePostController } from "@infra/http/controllers/posts/UpdatePostController";
import { makeGetPostById } from "@main/factories/use-case/post/get-post-by-id-factory";
import { makeUpdatePost } from "@main/factories/use-case/post/update-post-factory";
import { makeUpdatePostValidation } from "./validation-factory";

export const makeUpdatePostController = (): BaseController => {
  const validation = makeUpdatePostValidation();
  const updatePostUseCase = makeUpdatePost();
  const getPostByIdUseCase = makeGetPostById();
  return new UpdatePostController(
    validation,
    getPostByIdUseCase,
    updatePostUseCase
  );
};
