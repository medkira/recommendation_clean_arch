import { CreateCommentRepository } from "@application/interfaces/repositories/comment/CreateCommentRepository";
import { DeleteCommentRepository } from "@application/interfaces/repositories/comment/DeleteCommentRepository";
import { GetCommentByIdRepository } from "@application/interfaces/repositories/comment/GetCommentByIdRepository";
import { GetTotalCommentsByPostIdRepository } from "@application/interfaces/repositories/post/GetTotalCommentByPostIdRepository";
import {
  mapDocument,
  objectIdToString,
  stringToObjectId,
} from "../helpers/mappers";
import CommentModel from "../models/comments.model";

export class CommentRepository
  implements
    GetTotalCommentsByPostIdRepository,
    CreateCommentRepository,
    DeleteCommentRepository,
    GetCommentByIdRepository
{
  async createComment(
    commentData: CreateCommentRepository.Request
  ): Promise<string> {
    const comment = new CommentModel({
      ...commentData,
      createdAt: new Date(),
    });

    const savedComment = await comment.save();

    return objectIdToString(savedComment._id);
  }

  async deleteComment(commentId: string): Promise<void> {
    await CommentModel.findOneAndDelete(stringToObjectId(commentId));
  }
  async getCommentById(
    commentId: string
  ): Promise<GetCommentByIdRepository.Response> {
    const rawComment = await CommentModel.findById(stringToObjectId(commentId));
    return rawComment && mapDocument(rawComment);
  }
  async getTotalCommentsByPostId(postId: string): Promise<number> {
    return await CommentModel.countDocuments({ postId });
  }
}
