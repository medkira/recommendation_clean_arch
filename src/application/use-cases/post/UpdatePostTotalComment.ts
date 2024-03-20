import { GetTotalCommentsByPostIdRepository } from "@application/interfaces/repositories/post/GetTotalCommentByPostIdRepository";
import { UpdatePostTotalCommentsRepository } from "@application/interfaces/repositories/post/UpdatePostTotalCommentRepository";
import { UpdatePostTotalCommentsInterface } from "@application/interfaces/use-cases/posts/UpdatePostTotalCommentInterface";



export class UpdatePostTotalComments implements UpdatePostTotalCommentsInterface {
    constructor(
        private readonly getTotalCommentsByPostIdRepository: GetTotalCommentsByPostIdRepository,
        private readonly updatePostTotalCommentsRepository: UpdatePostTotalCommentsRepository
    ) { }

    async execute(postId: UpdatePostTotalCommentsInterface.Request): Promise<UpdatePostTotalCommentsInterface.Response> {
        const totalComments = await this.getTotalCommentsByPostIdRepository.getTotalCommentsByPostId(postId);
        await this.updatePostTotalCommentsRepository.updatePostTotalComments({ postId, totalComments })

    }

}