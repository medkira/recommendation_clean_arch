import { CreateGoogleUserInterface } from "@application/interfaces/use-cases/googleUser/CreateGoogleUserInterface";
import { CreateGoogleUser } from "@application/use-cases/googleUser/CreateGoogleUser";
import { GoogleUserRepository } from "@infra/db/mongodb/repositories/GoogleUserRepository";

export const makeCreateGoogleUser = (): CreateGoogleUserInterface => {
  const googleUserRepository = new GoogleUserRepository();

  return new CreateGoogleUser(googleUserRepository);
};
