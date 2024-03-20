import { DeletePostRepository } from "@application/interfaces/repositories/post/DeletePostRepository";
import { DeletePostInterface } from "@application/interfaces/use-cases/posts/DeletePostInterface";

export class DeletePost implements DeletePostInterface {
  constructor(private readonly deletePostRepository: DeletePostRepository) {}
  async execute(
    postId: DeletePostInterface.Request
  ): Promise<DeletePostInterface.Response> {
    await this.deletePostRepository.deletePost(postId);
  }
}
