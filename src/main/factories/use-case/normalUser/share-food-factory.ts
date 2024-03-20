import { ShareFoodInterface } from "@application/interfaces/use-cases/normalUser/ShareFoodInterface";
import { ShareFood } from "@application/use-cases/normalUser/ShareFood";
import { SendEmailAdapter } from "@infra/send-email/SendEmailAdapter";

export const makeShareFood = (): ShareFoodInterface => {
  const sendEmailAdapter = new SendEmailAdapter();
  return new ShareFood(sendEmailAdapter);
};
