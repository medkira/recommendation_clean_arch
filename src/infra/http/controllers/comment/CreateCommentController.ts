import { PostNotFoundError } from "@application/errors/PostNotFoundError";
import { CreateCommentInterface } from "@application/interfaces/use-cases/comments/CreateCommentInterface";
import { GetPostByIdInterface } from "@application/interfaces/use-cases/posts/GetPostByIdInterface";
import { UpdatePostTotalCommentsInterface } from "@application/interfaces/use-cases/posts/UpdatePostTotalCommentInterface";
import { notFound, ok } from "@infra/http/helpers/https";
import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";
import { HttpResponse } from "@infra/http/interfaces/http/HttpResponse";
import { Validation } from "@infra/http/interfaces/validation/validations";
import { BaseController } from "../BaseController";




export class CreateCommentController extends BaseController {

    constructor(
        private readonly createCommentValidation: Validation,
        private readonly getPostById: GetPostByIdInterface,
        private readonly creatComment: CreateCommentInterface,
        private readonly updatePostTotalComments: UpdatePostTotalCommentsInterface,

    ) {
        super(createCommentValidation);
    }

    async execute(httpRequest: CreateCommentController.Request): Promise<CreateCommentController.Response> {
        const userId = httpRequest.userId!;
        const { postId, title, text, likes } = httpRequest.body!;
        const postOrError = await this.getPostById.execute(postId);
        if (postOrError instanceof PostNotFoundError) {
            return notFound(postOrError);
        }

        const id = await this.creatComment.execute({
            userId, postId, title, text, likes
        });

        await this.updatePostTotalComments.execute(postId);

        return ok({ id })
    }

}


export namespace CreateCommentController {
    export type Request = HttpRequest<Omit<CreateCommentInterface.Request, "userId">>;
    export type Response = HttpResponse<{ commentId: string } | PostNotFoundError>
}