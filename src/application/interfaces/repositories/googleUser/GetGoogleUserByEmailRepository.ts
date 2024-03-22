import { GoogleUser } from "@domain/entities/GoogleUser";

export interface GetGoogleUserByEmailRepository {
  getGoogleUserByEmail(
    email: GetGoogleUserByEmailRepository.Request
  ): Promise<GetGoogleUserByEmailRepository.Response>;
}

export namespace GetGoogleUserByEmailRepository {
  export type Request = string;
  export type Response = GoogleUser | null;
}
