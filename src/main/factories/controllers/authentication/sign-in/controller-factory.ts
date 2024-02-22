import { BaseController } from "@infra/http/controllers/BaseController";
import { SignInController } from "@infra/http/controllers/authentication/SignInController";
import { makeSignIn } from "@main/factories/use-case/authentication/sign-in-factory";

export const makeSignInController = (): BaseController => {
    const signIn = makeSignIn();

    return new SignInController(signIn)
}