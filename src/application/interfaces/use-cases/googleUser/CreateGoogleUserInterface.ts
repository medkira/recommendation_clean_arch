import { GoogleUserProps } from "@domain/entities/GoogleUser";
import { UseCase } from "../UseCase";



export interface CreateGoogleUserInterface
  extends UseCase<CreateGoogleUserInterface.Request, CreateGoogleUserInterface.Response> {
  execute(
    GoogleUserData: CreateGoogleUserInterface.Request
  ): Promise<CreateGoogleUserInterface.Response>;
}

export namespace CreateGoogleUserInterface {
  export type Request = Omit<GoogleUserProps, "id" | "role">; // { email: string, password: string };
  export type Response = string;
}