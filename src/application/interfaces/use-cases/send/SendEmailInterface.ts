import { MailOptionsProps } from "@domain/entities/MailOptions";
import { UseCase } from "../UseCase";





export interface SendEmailInterface
  extends UseCase<SendEmailInterface.Request, SendEmailInterface.Response> {
  execute(mailOptions: SendEmailInterface.Request): Promise<SendEmailInterface.Response>;
}

export namespace SendEmailInterface {
  export type Request = MailOptionsProps;
  export type Response = string;
}
