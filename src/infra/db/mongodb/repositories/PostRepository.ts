import { CreatePostRepository } from "@application/interfaces/repositories/post/CreatePostRepository";
import { DeletePostRepository } from "@application/interfaces/repositories/post/DeletePostRepository";
import { GetPostByIdRepository } from "@application/interfaces/repositories/post/GetPostByIdRepository";
import { UpdatePostRepository } from "@application/interfaces/repositories/post/UpdatePostRepository";
import { Post } from "@domain/entities/Post";
import { isValidObjectId } from "mongoose";
import {
  objectIdToString,
  mapDocument,
  stringToObjectId,
  mapCollection,
} from "../helpers/mappers";
import postModel from "../models/post.model";
import { paginateModel } from "../helpers/utils/pagination-util";
import { GetLatestPostsRepository } from "@application/interfaces/repositories/post/GetLatestPostRepository";
import { GetTopPostsRepository } from "@application/interfaces/repositories/post/GetTopPostsRepository";
import { sortModel } from "../helpers/utils/sorting-util";
import { UpdatePostTotalCommentsRepository } from "@application/interfaces/repositories/post/UpdatePostTotalCommentRepository";

export class PostRepository
  implements
  CreatePostRepository,
  GetPostByIdRepository,
  UpdatePostRepository,
  DeletePostRepository,
  GetLatestPostsRepository,
  GetTopPostsRepository,
  UpdatePostTotalCommentsRepository {
  async updatePostTotalComments(params: UpdatePostTotalCommentsRepository.Request): Promise<Post> {
    let { postId, totalComments } = params;
    const rawUpdatedComment = await postModel.findOneAndUpdate(
      stringToObjectId(postId),
      { $set: { totalComments } },
      { upsert: true, returnDocument: 'after' },
    );
    return mapDocument(rawUpdatedComment);
  }
  getTopPosts(
    params: GetTopPostsRepository.Request
  ): Promise<GetTopPostsRepository.Response> {
    return sortModel(postModel, params.sortBy, params.limit);
  }
  async getLatestPosts(
    params: GetLatestPostsRepository.Request
  ): Promise<GetLatestPostsRepository.Response> {
    const { page, paginationLimit, query } = params;
    const rawdata = await paginateModel(postModel, page, paginationLimit, query);
    const transformedData = mapCollection(rawdata.data);
    return {
      data: transformedData,
      page: rawdata.page,
      total: rawdata.total,
      totalPages: rawdata.totalPages
    };
  }


  async createPost(postData: CreatePostRepository.Request): Promise<string> {
    const post = new postModel({
      ...postData,
      createdAt: new Date(),
    });

    const savedPost = await post.save();

    const postId = objectIdToString(savedPost._id);

    return postId;
  }

  async getPostById(postId: string): Promise<GetPostByIdRepository.Response> {
    if (!isValidObjectId(postId)) {
      return null;
    }

    const rawPost = await postModel.findById(postId);

    return rawPost && mapDocument(rawPost);
  }

  async updatePost(params: UpdatePostRepository.Request): Promise<Post> {
    const { postId, postData } = params;
    const rawUpdatedPost = await postModel.findOneAndUpdate(
      stringToObjectId(postId),
      { ...postData, updatedAt: new Date() },
      {
        new: true,
      }
    );
    return rawUpdatedPost && mapDocument(rawUpdatedPost);
  }

  async deletePost(postId: string): Promise<void> {
    await postModel.findOneAndDelete(stringToObjectId(postId));
  }
}
