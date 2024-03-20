import { BaseController } from "@infra/http/controllers/BaseController";
import { DeleteCommentController } from "@infra/http/controllers/comment/DeleteCommentController";
import { makeDeleteComment } from "@main/factories/use-case/comment/delete-comment-factory";
import { makegetCommentById } from "@main/factories/use-case/comment/get-comment-by-id-factory";
import { makeUpdatePostTotalComments } from "@main/factories/use-case/post/update-post-total-comment-factory";


export const makeDeleteCommentController = (): BaseController => {
    const deleteCommentUseCase = makeDeleteComment();
    const getCommentByIdUseCase = makegetCommentById();
    const updatePostTotalCommentsUseCase = makeUpdatePostTotalComments();

    return new DeleteCommentController(
        deleteCommentUseCase,
        getCommentByIdUseCase,
        updatePostTotalCommentsUseCase,
    );

}