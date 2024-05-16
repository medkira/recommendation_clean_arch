import { CreateGoogleUserInterface } from "@application/interfaces/use-cases/googleUser/CreateGoogleUserInterface";
import { BaseController } from "../BaseController";
import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";
import { HttpResponse } from "@infra/http/interfaces/http/HttpResponse";
import { GetGoogleUserByEmailInterface } from "@application/interfaces/use-cases/googleUser/GetGoogleUserByEmailInterface";
import { ok, unauthorized } from "@infra/http/helpers/https";
import { UserNotFoundError } from "@application/errors/UserNotFoundError";
import { UnauthorizedError } from "@application/errors/UnautorizedError";
import { SignInInterface } from "@application/interfaces/use-cases/authentication/SignInInterface";
import { SignUpNormalUserInterface } from "@application/interfaces/use-cases/authentication/SignUpNormalUserInterface";
import { UserRole } from "@domain/entities/User";




export class SignInGoogleUserController extends BaseController {

    constructor(
        private readonly createGoogleUser: CreateGoogleUserInterface,
        private readonly getGoogleUserByEmail: GetGoogleUserByEmailInterface,
        private readonly signIn: SignInInterface,
        private readonly signUp: SignUpNormalUserInterface
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
            });
            await this.signUp.execute({ role: UserRole.NORMAL, email: email, password: "", profileImage: picture, username: name } as SignUpNormalUserInterface.Request);
            const authenticationTokenOrError = await this.signIn.execute({ email, password: "" });

            return ok({
                authenticationToken: authenticationTokenOrError
            });
            // return ok({ view: 'google-auth/setUserRoleView', token: email });
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