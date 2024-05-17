
import { GetLatesCommentsInterface } from "@application/interfaces/use-cases/comments/GetLatestCommentsInterface";
import { GetLatesComments } from "@application/use-cases/comment/GetLatestComments";
import { CommentRepository } from "@infra/db/mongodb/repositories/CommentRepository";
import { PostRepository } from "@infra/db/mongodb/repositories/PostRepository";




export const makeGetLatestComments = (): GetLatesCommentsInterface => {
    const postRepository = new CommentRepository();
    return new GetLatesComments(postRepository);
}