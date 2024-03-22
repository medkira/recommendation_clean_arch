import { CreateGoogleUserRepository } from "@application/interfaces/repositories/googleUser/CreateGoogleUserRepository";
import { CreateGoogleUserInterface } from "@application/interfaces/use-cases/googleUser/CreateGoogleUserInterface";



export class CreateGoogleUser implements CreateGoogleUserInterface {
    constructor(private readonly createGoogleUserRepository: CreateGoogleUserRepository) {}
    async execute(
      GoogleUserData: CreateGoogleUserInterface.Request
    ): Promise<CreateGoogleUserInterface.Response> {
      return this.createGoogleUserRepository.createGoogleUser({
        ...GoogleUserData,
      });
    }
  }
  