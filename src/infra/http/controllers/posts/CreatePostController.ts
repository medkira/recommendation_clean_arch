import { CreatePostInterface } from "@application/interfaces/use-cases/posts/CreatePostInterface";
import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";
import { HttpResponse } from "@infra/http/interfaces/http/HttpResponse";
import { Validation } from "@infra/http/interfaces/validation/validations";
import { BaseController } from "../BaseController";
import { ok } from "@infra/http/helpers/https";
import { File } from "@domain/entities/File";

export class CreatePostController extends BaseController {
  constructor(
    private readonly createPostValidation: Validation,
    private readonly createPost: CreatePostInterface
  ) {
    super(createPostValidation);
  }

  async execute(
    httpRequest: CreatePostController.Request
  ): Promise<CreatePostController.Response> {
    const userId = httpRequest.userId!;
    const {
      title,
      content,
      post_type,
      likes,
      location,
      postImage = httpRequest.files?.postImage,
    } = httpRequest.body!;
    const postId = await this.createPost.execute({
      userId,
      title,
      content,
      post_type,
      postImage,
      likes,
      location,
    });

    return ok({ postId, message: "post created successfully" });
  }
}

export namespace CreatePostController {
  export type Request = HttpRequest<
    Omit<CreatePostInterface.Request, "userId">,
    undefined,
    undefined,
    { postImage: File[] }
  >;

  export type Response = HttpResponse<{ postId: string }>;
}
