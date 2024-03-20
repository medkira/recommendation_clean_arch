import { Post } from "@domain/entities/Post";




export interface GetTopPostsRepository {
    getTopPosts(params: GetTopPostsRepository.Request): Promise<GetTopPostsRepository.Response>;
}

export namespace GetTopPostsRepository {
    export type Request = {sortBy: string, limit: number };
    export type Response = { data: Post[] };
}
