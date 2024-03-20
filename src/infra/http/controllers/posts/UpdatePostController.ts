import { PostNotFoundError } from "@application/errors/PostNotFoundError";
import { GetPostByIdInterface } from "@application/interfaces/use-cases/posts/GetPostByIdInterface";
import { UpdatePostInterface } from "@application/interfaces/use-cases/posts/UpdatePostInterface";
import { PermissionError } from "@infra/http/errors/PermissionError";
import { notFound, forbidden, ok } from "@infra/http/helpers/https";
import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";
import { HttpResponse } from "@infra/http/interfaces/http/HttpResponse";
import { Validation } from "@infra/http/interfaces/validation/validations";
import { BaseController } from "../BaseController";
import { File } from "@domain/entities/File";

export class UpdatePostController extends BaseController {
  constructor(
    private readonly updatePostValidation: Validation,
    private readonly getPostById: GetPostByIdInterface,
    private readonly updatePost: UpdatePostInterface
  ) {
    super(updatePostValidation);
  }

  async execute(
    httpRequest: UpdatePostController.Request
  ): Promise<UpdatePostController.Response> {
    const userId = httpRequest.userId!;
    const { id } = httpRequest.params!;
    const {
      title,
      content,
      postImage = httpRequest.files?.postImage,
      post_type,
    } = httpRequest.body!;

    const postOrError = await this.getPostById.execute(id);

    if (postOrError instanceof PostNotFoundError) {
      return notFound(postOrError);
    }

    if (postOrError.userId !== userId) {
      return forbidden(new PermissionError());
    }

    const updatedPostOrError = await this.updatePost.execute({
      postId: id,
      postData: { title, content, postImage, post_type },
    });

   

    return ok(updatedPostOrError);
  }
}

export namespace UpdatePostController {
  export type Request = HttpRequest<
    UpdatePostInterface.PostDataType,
    { id: string },
    undefined,
    undefined,
    { postImage: File[] }
  >;
  export type Response = HttpResponse<
    UpdatePostInterface.Rsponse | PostNotFoundError | PermissionError
  >;
}
