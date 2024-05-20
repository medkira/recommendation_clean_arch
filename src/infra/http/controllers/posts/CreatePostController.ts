import { CreatePostInterface } from "@application/interfaces/use-cases/posts/CreatePostInterface";
import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";
import { HttpResponse } from "@infra/http/interfaces/http/HttpResponse";
import { Validation } from "@infra/http/interfaces/validation/validations";
import { BaseController } from "../BaseController";
import { notFound, ok } from "@infra/http/helpers/https";
import { File } from "@domain/entities/File";
import { LoadUserByIdInterface } from "@application/interfaces/use-cases/users/LoadUserByIdInterface";
import { UserNotFoundError } from "@application/errors/UserNotFoundError";

export class CreatePostController extends BaseController {
  constructor(
    private readonly createPostValidation: Validation,
    private readonly createPost: CreatePostInterface,
    private readonly loadUserById: LoadUserByIdInterface,
  ) {
    super(createPostValidation);
  }

  async execute(
    httpRequest: CreatePostController.Request
  ): Promise<CreatePostController.Response> {



    const userId = httpRequest.userId!;
    const userOrUserNotFoundEroor = await this.loadUserById.execute(userId);


    // add this check to be abel to see all props or user 
    if (userOrUserNotFoundEroor instanceof UserNotFoundError) {
      /// suppose to return an error...
      return notFound(userOrUserNotFoundEroor)
    }


    const { username } = userOrUserNotFoundEroor;

    const { title, content, post_type, likes, rate, location, postImage = httpRequest.files?.postImage, } = httpRequest.body!;


    const postId = await this.createPost.execute({ userId, title, content, post_type, postImage, likes, rate, location, user_name: username });

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

  export type Response = HttpResponse<{ postId: string } | UserNotFoundError>;
}
