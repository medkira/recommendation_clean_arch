import { MenuNotFoundError } from "@application/errors/MenuNotFoundError";
import { GetMenuByIdInterface } from "@application/interfaces/use-cases/menu/GetMenuByIdInterface";
import { notFound, ok } from "@infra/http/helpers/https";
import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";
import { HttpResponse } from "@infra/http/interfaces/http/HttpResponse";
import { BaseController } from "../BaseController";

export class GetMenuByIdController extends BaseController {
  constructor(private readonly getMenuById: GetMenuByIdInterface) {
    super();
  }
  async execute(
    httpRequest: GetMenuByIdController.Request
  ): Promise<GetMenuByIdController.Response> {
    const { id } = httpRequest.params!;
    const MenuOrError = await this.getMenuById.execute(id);
    if (MenuOrError instanceof MenuNotFoundError) {
      return notFound(MenuOrError);
    }
    return ok(MenuOrError);
  }
}

export namespace GetMenuByIdController {
  export type Request = HttpRequest<undefined, { id: string }>;
  export type Response = HttpResponse<GetMenuByIdInterface.Response>;
}
