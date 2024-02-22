import { BaseController } from "@infra/http/controllers/BaseController";
import { SignUpController } from "@infra/http/controllers/authentication/SignUpController";
import { makeSignIn } from "@main/factories/use-case/authentication/sign-in-factory";
import { makeSignUpNormalUser } from "@main/factories/use-case/authentication/sign-up-normalUser-factory";
import { makeSignUpOwner } from "@main/factories/use-case/authentication/sign-up-owner-factory";
import { makeSignUpValidation } from "./validation-factory";


export const makeSignUpController = (): BaseController => {
    const signUpValidation = makeSignUpValidation();
    const signUpOwner = makeSignUpOwner();
    const signUpNormalUser = makeSignUpNormalUser();
    const signIn = makeSignIn();
    return new SignUpController(signUpValidation, signUpOwner, signUpNormalUser, signIn);
}