import { MailOptionsProps } from "@domain/entities/MailOptions";
import { UseCase } from "../UseCase";

export interface ShareFoodInterface
  extends UseCase<ShareFoodInterface.Request, ShareFoodInterface.Response> {
  execute(
    mailOptions: ShareFoodInterface.Request
  ): Promise<ShareFoodInterface.Response>;
}

export namespace ShareFoodInterface {
  export type Request = MailOptionsProps;
  export type Response = string;
}
