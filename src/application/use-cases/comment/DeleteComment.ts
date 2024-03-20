import { DeleteCommentRepository } from "@application/interfaces/repositories/comment/DeleteCommentRepository";
import { DeleteCommentInterface } from "@application/interfaces/use-cases/comments/DeleteCommentInterface";







export class DeleteComment implements DeleteCommentInterface {

    constructor(private readonly deleteCommentRepository: DeleteCommentRepository) { }

    async execute(commentId: DeleteCommentInterface.Request): Promise<DeleteCommentInterface.Response> {
        await this.deleteCommentRepository.deleteComment(commentId);
    }

}