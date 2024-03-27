import { UserNotFoundError } from "@application/errors/UserNotFoundError";
import { GetGoogleUserByEmailRepository } from "@application/interfaces/repositories/googleUser/GetGoogleUserByEmailRepository";
import { GetGoogleUserByEmailInterface } from "@application/interfaces/use-cases/googleUser/GetGoogleUserByEmailInterface";


export class GetGoogleUserByEmail implements GetGoogleUserByEmailInterface {
  constructor(private readonly getGoogleUserByEmailRepository: GetGoogleUserByEmailRepository) { }
  async execute(email: string): Promise<GetGoogleUserByEmailInterface.Response> {
    const user = await this.getGoogleUserByEmailRepository.getGoogleUserByEmail(email);
    if (!user) {
      return new UserNotFoundError();
    }
    return user;
  }

}
