import { MenuNotFoundError } from "@application/errors/MenuNotFoundError";
import { GetMenuByFoodIdInterface } from "@application/interfaces/use-cases/foods/GetMenuByFoodIdInterface";
import { notFound, ok } from "@infra/http/helpers/https";
import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";
import { HttpResponse } from "@infra/http/interfaces/http/HttpResponse";
import { BaseController } from "../BaseController";





export class GetMenuByFoodIdController extends BaseController {
    constructor(
      private readonly getMenuByFoodIdInterface: GetMenuByFoodIdInterface
    ) {
      super();
    }
  
    async execute(
      httpRequest: GetMenuByFoodIdController.Request
    ): Promise<GetMenuByFoodIdController.Response> {
      const { id } = httpRequest.params!;
      const menuOrError = await this.getMenuByFoodIdInterface.execute(id);
      if (menuOrError instanceof MenuNotFoundError) {
        return notFound(menuOrError);
      }
      return ok(menuOrError);
    }
  }
  export namespace GetMenuByFoodIdController {
    export type Request = HttpRequest<undefined, { id: string }>;
    export type Response = HttpResponse<GetMenuByFoodIdInterface.Response>;
  }