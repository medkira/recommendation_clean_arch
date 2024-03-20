import { PostNotFoundError } from "@application/errors/PostNotFoundError";
import { DeletePostInterface } from "@application/interfaces/use-cases/posts/DeletePostInterface";
import { GetPostByIdInterface } from "@application/interfaces/use-cases/posts/GetPostByIdInterface";
import { PermissionError } from "@infra/http/errors/PermissionError";
import { notFound, forbidden, ok } from "@infra/http/helpers/https";
import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";
import { HttpResponse } from "@infra/http/interfaces/http/HttpResponse";
import { BaseController } from "../BaseController";

export class DeletePostController extends BaseController {
  constructor(
    private readonly getPostById: GetPostByIdInterface,
    private readonly deletePost: DeletePostInterface
  ) {
    super();
  }

  async execute(
    httpRequest: DeletePostController.Request
  ): Promise<DeletePostController.Response> {
    const userId = httpRequest.userId!;
    const { id } = httpRequest.params!;

    const postOrError = await this.getPostById.execute(id);

    if (postOrError instanceof PostNotFoundError) {
      return notFound(postOrError);
    }

    if (postOrError.userId !== userId) {
      return forbidden(new PermissionError());
    }

    await this.deletePost.execute(id);
    return ok({ message: "Post deleted successfully" });
  }
}

export namespace DeletePostController {
  export type Request = HttpRequest<undefined, { id: string }>;
  export type Response = HttpResponse<
    undefined | PostNotFoundError | PermissionError
  >;
}
