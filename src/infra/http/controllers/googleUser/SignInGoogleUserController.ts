import { CreateGoogleUserInterface } from "@application/interfaces/use-cases/googleUser/CreateGoogleUserInterface";
import { BaseController } from "../BaseController";
import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";
import { HttpResponse } from "@infra/http/interfaces/http/HttpResponse";
import { GetGoogleUserByEmailRepository } from "@application/interfaces/repositories/googleUser/GetGoogleUserByEmailRepository";
import { GetGoogleUserByEmailInterface } from "@application/interfaces/use-cases/googleUser/GetGoogleUserByEmailInterface";
import { EmailInUseError } from "@application/errors/EmailInUseError";
import { notFound, ok, unauthorized } from "@infra/http/helpers/https";
import { UserNotFoundError } from "@application/errors/UserNotFoundError";
import { UnauthorizedError } from "@application/errors/UnautorizedError";
import { SignInInterface } from "@application/interfaces/use-cases/authentication/SignInInterface";




export class SignInGoogleUserController extends BaseController {

    constructor(
        private readonly createGoogleUser: CreateGoogleUserInterface,
        private readonly getGoogleUserByEmail: GetGoogleUserByEmailInterface,
        private readonly signIn: SignInInterface,

    ) {
        super()
    }

    async execute(httpRequest: SignInGoogleUserController.Request): Promise<SignInGoogleUserController.Response> {
        const { name, email, family_name, picture, email_verified } = httpRequest.body!


        const user = await this.getGoogleUserByEmail.execute(email);

        if (user instanceof UserNotFoundError) {
            await this.createGoogleUser.execute({
                email,
                family_name,
                name,
                picture,
                email_verified
            })
            return ok({ view: 'google-auth/setUserRoleView', token: email });
        } else {
            const authenticationTokenOrError = await this.signIn.execute({ email, password: "" });

            if (authenticationTokenOrError instanceof UnauthorizedError) {
                return unauthorized(authenticationTokenOrError);
            }
            return ok({
                authenticationToken: authenticationTokenOrError
            });
        }



    }

}

export namespace SignInGoogleUserController {
    export type Request = HttpRequest<CreateGoogleUserInterface.Request>;

    export type Response = HttpResponse<{ authenticationToken: string } | UnauthorizedError | { view: string, token: string }>;
}