import { BaseController } from "@infra/http/controllers/BaseController";
import { SignInController } from "@infra/http/controllers/authentication/SignInController";
import { makeSignIn } from "@main/factories/use-case/authentication/sign-in-factory";
import { makeSignInValidation } from "./validation-factory";

export const makeSignInController = (): BaseController => {
    const signIn = makeSignIn();
    const signInValidation = makeSignInValidation();
    return new SignInController(signInValidation, signIn)
}