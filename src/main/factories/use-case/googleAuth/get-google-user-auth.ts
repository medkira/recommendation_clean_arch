import { GetGoogleUserByEmailInterface } from "@application/interfaces/use-cases/googleUser/GetGoogleUserByEmailInterface";
import { GetGoogleUserByEmail } from "@application/use-cases/googleUser/GetGoogleUserByEmail";
import { GoogleUserRepository } from "@infra/db/mongodb/repositories/GoogleUserRepository";

export const makeGetGoogleUserByEmail = (): GetGoogleUserByEmailInterface => {
  const googleUserRepository = new GoogleUserRepository();
  return new GetGoogleUserByEmail(googleUserRepository);
};
