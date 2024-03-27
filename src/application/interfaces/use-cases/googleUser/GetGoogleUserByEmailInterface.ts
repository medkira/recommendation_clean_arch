import { UserNotFoundError } from "@application/errors/UserNotFoundError";
import { GoogleUser } from "@domain/entities/GoogleUser";


export interface GetGoogleUserByEmailInterface {
  execute(
    email: GetGoogleUserByEmailInterface.Request
  ): Promise<GetGoogleUserByEmailInterface.Response>;
}

export namespace GetGoogleUserByEmailInterface {
  export type Request = string;
  export type Response = GoogleUser | UserNotFoundError;
}