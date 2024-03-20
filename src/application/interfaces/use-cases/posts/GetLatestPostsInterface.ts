import { Post, postType } from "@domain/entities/Post";
import { UseCase } from "../UseCase";



export interface GetLatesPostsInterface extends UseCase<GetLatesPostsInterface.Request, GetLatesPostsInterface.Response> {
    execute(params: GetLatesPostsInterface.Request): Promise<GetLatesPostsInterface.Response>;
}

export namespace GetLatesPostsInterface {
    export type Request = { page?: number, type?: postType, title: string };
    export type Response = { data: Post[], page: number, total: number, totalPages: number };
}