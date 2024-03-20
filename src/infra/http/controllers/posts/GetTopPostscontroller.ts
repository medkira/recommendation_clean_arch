import { GetTopPostsInterface } from "@application/interfaces/use-cases/posts/GetTopPotsInterface";
import { ok } from "@infra/http/helpers/https";
import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";
import { HttpResponse } from "@infra/http/interfaces/http/HttpResponse";
import { BaseController } from "../BaseController";

export class GetTopPostsController extends BaseController {
  constructor(private readonly getTopPosts: GetTopPostsInterface) {
    super();
  }

  async execute(
    httpRequest: GetTopPostsController.Request
  ): Promise<GetTopPostsController.Response> {
    const { sortBy, limit } = httpRequest.query;
    const response = await this.getTopPosts.execute({ sortBy, limit });

    return ok(response);
  }
}

export namespace GetTopPostsController {
  export type Request = HttpRequest<GetTopPostsInterface.Request>;
  export type Response = HttpResponse<GetTopPostsInterface.Response>;
}
