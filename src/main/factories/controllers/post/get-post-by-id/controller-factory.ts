import { BaseController } from "@infra/http/controllers/BaseController";
import { GetPostByIdController } from "@infra/http/controllers/posts/GetPostByIdController";
import { makeGetPostById } from "@main/factories/use-case/post/get-post-by-id-factory";

export const makeGetPostByIdController = (): BaseController => {
  const usecase = makeGetPostById();
  return new GetPostByIdController(usecase);
};
