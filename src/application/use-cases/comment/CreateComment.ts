import { CreateCommentRepository } from "@application/interfaces/repositories/comment/CreateCommentRepository";
import { CreateCommentInterface } from "@application/interfaces/use-cases/comments/CreateCommentInterface";



export class CreateComment implements CreateCommentInterface {
    constructor(private readonly createCommentRepository: CreateCommentRepository) {

    }
    execute(commentData: CreateCommentInterface.Request): Promise<CreateCommentInterface.Response> {
        

        return this.createCommentRepository.createComment({...commentData, likes:0});
    }
}