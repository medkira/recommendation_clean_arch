import { GetLatestCommentsRepository } from "@application/interfaces/repositories/comment/GetLatestCommentsRepository";
import { GetLatesCommentsInterface } from "@application/interfaces/use-cases/comments/GetLatestCommentsInterface";

export class GetLatesComments implements GetLatesCommentsInterface {
    constructor(
        private readonly getLatesrCommentsRepository: GetLatestCommentsRepository
    ) { }
    async execute(
        params: GetLatesCommentsInterface.Request
    ): Promise<GetLatesCommentsInterface.Response> {
        const { page = 1, postId } = params;
        const paginationLimit = 20;

        return this.getLatesrCommentsRepository.getLatestComments({
            page,
            paginationLimit,
            query: {
                ...(postId && { postId }),
            },
        });
    }
}
