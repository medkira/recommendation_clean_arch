import { SendEmailInterface } from "@application/interfaces/use-cases/send/SendEmailInterface";
import { BaseController } from "../BaseController";
import { Validation } from "@infra/http/validation/interface/Validation";
import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";
import { HttpResponse } from "@infra/http/interfaces/http/HttpResponse";
import { notFound, ok } from "@infra/http/helpers/https";
import { ShareFoodInterface } from "@application/interfaces/use-cases/normalUser/ShareFoodInterface";
import { GetFoodByIdInterface } from "@application/interfaces/use-cases/foods/GetFoodByIdInterface";
import { FoodNotFoundError } from "@application/errors/FoodNotFoundError";

export class ShareController extends BaseController {
  constructor(
    private readonly shareValidation: Validation,
    private readonly shareFood: ShareFoodInterface,
    private readonly getFoodById: GetFoodByIdInterface
  ) {
    super(shareValidation);
  }
  async execute(
    httpRequest: ShareController.Request
  ): Promise<ShareController.Response> {
    const { from, to, subject } = httpRequest.body!;
    const { id } = httpRequest.params!;
    const food = await this.getFoodById.execute(id);
    if (food instanceof Error) {
      return notFound(food);
    }
    const text = JSON.stringify(food);

    const messageId = await this.shareFood.execute({ from, subject, text, to });

    return ok({ messageId });
  }
}

export namespace ShareController {
  export type Request = HttpRequest<ShareFoodInterface.Request, { id: string }>;
  export type Response = HttpResponse<
    ShareFoodInterface.Response | FoodNotFoundError
  >;
}
