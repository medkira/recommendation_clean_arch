import { FoodNotFoundError } from "@application/errors/FoodNotFoundError";
import { GetFoodByIdInterface } from "@application/interfaces/use-cases/foods/GetFoodByIdInterface";
import { notFound, ok } from "@infra/http/helpers/https";
import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";
import { HttpResponse } from "@infra/http/interfaces/http/HttpResponse";
import { BaseController } from "../BaseController";

export class GetFoodByIdController extends BaseController {
    constructor(private readonly getFoodById: GetFoodByIdInterface) {
      super();
    }
    async execute(
      httpRequest: GetFoodByIdController.Request
    ): Promise<GetFoodByIdController.Response> {
      const { id } = httpRequest.params!;
      const FoodOrError = await this.getFoodById.execute(id);
      if (FoodOrError instanceof FoodNotFoundError) {
        return notFound(FoodOrError);
      }
      return ok(FoodOrError);
    }
  }
  
  export namespace GetFoodByIdController {
    export type Request = HttpRequest<undefined, { id: string }>;
    export type Response = HttpResponse<GetFoodByIdInterface.Response>;
  }