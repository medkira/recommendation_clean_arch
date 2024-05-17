import { ok } from "@infra/http/helpers/https";
import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";
import { HttpResponse } from "@infra/http/interfaces/http/HttpResponse";
import { BaseController } from "../BaseController";
import { GetLatesCommentsInterface } from "@application/interfaces/use-cases/comments/GetLatestCommentsInterface";

export class GetLatestCommentsController extends BaseController {
  constructor(private readonly getLatestComments: GetLatesCommentsInterface) {
    super();
  }

  async execute(
    httpRequest: GetLatestCommentsController.Request
  ): Promise<GetLatestCommentsController.Response> {
    const { page, postId } = httpRequest.query!;

    const response = await this.getLatestComments.execute({ page, postId });

    return ok(response);
  }
}

export namespace GetLatestCommentsController {
  export type Request = HttpRequest<
    undefined,
    undefined,
    GetLatesCommentsInterface.Request
  >;
  export type Response = HttpResponse<GetLatesCommentsInterface.Response>;
}
