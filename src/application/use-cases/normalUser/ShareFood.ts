import { MailOptionsProps } from "@domain/entities/MailOptions";
import { SendEmail } from "@application/interfaces/send-email/SendEmail";
import { GetFoodByIdInterface } from "@application/interfaces/use-cases/foods/GetFoodByIdInterface";
import { ShareFoodInterface } from "@application/interfaces/use-cases/normalUser/ShareFoodInterface";

export class ShareFood implements ShareFoodInterface {
  constructor(private readonly SendEmail: SendEmail) {}
  async execute(mailOptions: MailOptionsProps): Promise<string> {
    return this.SendEmail.sendEmail(mailOptions);
  }
}
