import { GetLatesPostsInterface } from "@application/interfaces/use-cases/posts/GetLatestPostsInterface";
import { ok } from "@infra/http/helpers/https";
import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";
import { HttpResponse } from "@infra/http/interfaces/http/HttpResponse";
import { BaseController } from "../BaseController";

export class GetLatestPostsController extends BaseController {
  constructor(private readonly getLatestPosts: GetLatesPostsInterface) {
    super();
  }

  async execute(
    httpRequest: GetLatestPostsController.Request
  ): Promise<GetLatestPostsController.Response> {
    const { page, type, title } = httpRequest.query!;

    const response = await this.getLatestPosts.execute({ page, type, title });

    return ok(response);
  }
}

export namespace GetLatestPostsController {
  export type Request = HttpRequest<
    undefined,
    undefined,
    GetLatesPostsInterface.Request
  >;
  export type Response = HttpResponse<GetLatesPostsInterface.Response>;
}
