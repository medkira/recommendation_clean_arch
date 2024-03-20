import { CommentNotFoundError } from "@application/errors/CommentNotFoundError";
import { DeleteCommentInterface } from "@application/interfaces/use-cases/comments/DeleteCommentInterface";
import { GetCommentByIdInterface } from "@application/interfaces/use-cases/comments/GetCommentByIdInterface";
import { UpdatePostTotalCommentsInterface } from "@application/interfaces/use-cases/posts/UpdatePostTotalCommentInterface";
import { PermissionError } from "@infra/http/errors/PermissionError";
import { notFound, forbidden, ok } from "@infra/http/helpers/https";
import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";
import { HttpResponse } from "@infra/http/interfaces/http/HttpResponse";
import { BaseController } from "../BaseController";




export class DeleteCommentController extends BaseController {

    constructor(
        private readonly deleteComment: DeleteCommentInterface,
        private readonly getCommentById: GetCommentByIdInterface,
        private readonly updatePosTotalComments: UpdatePostTotalCommentsInterface,
    ) {
        super()
    }

    async execute(httpRequest: DeleteCommentControllert.Request): Promise<DeleteCommentControllert.Response> {
        const { id } = httpRequest.params!;
        const userId = httpRequest.userId!;

        const commentOrError = await this.getCommentById.execute(id);
        if (commentOrError instanceof CommentNotFoundError) {
            return notFound(commentOrError);
        }

        if (commentOrError.userId !== userId) {
            return forbidden(new PermissionError());
        }

        await this.deleteComment.execute(id)
        await this.updatePosTotalComments.execute(commentOrError.postId);

        return ok({ "message": "Comment deleted successfully" });
    }

}


export namespace DeleteCommentControllert {
    export type Request = HttpRequest<undefined, { id: string }>;
    export type Response = HttpResponse<undefined | CommentNotFoundError | PermissionError>

}