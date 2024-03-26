import { CreateGoogleUserInterface } from "@application/interfaces/use-cases/googleUser/CreateGoogleUserInterface";
import { BaseController } from "../BaseController";
import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";
import { HttpResponse } from "@infra/http/interfaces/http/HttpResponse";
import { GetGoogleUserByEmailRepository } from "@application/interfaces/repositories/googleUser/GetGoogleUserByEmailRepository";
import { GetGoogleUserByEmailInterface } from "@application/interfaces/use-cases/googleUser/GetGoogleUserByEmailInterface";
import { EmailInUseError } from "@application/errors/EmailInUseError";
import { notFound, ok } from "@infra/http/helpers/https";
import { UserNotFoundError } from "@application/errors/UserNotFoundError";




export class SignInGoogleUserController extends BaseController {

    constructor(
        private readonly createGoogleUserInterface: CreateGoogleUserInterface,
        private readonly getGoogleUserByEmail: GetGoogleUserByEmailInterface,
    ) {
        super()
    }

    async execute(httpRequest: SignInGoogleUserController.Request): Promise<SignInGoogleUserController.Response> {
        const { name, email, family_name, picture, email_verified } = httpRequest.user!
        // console.log("from controller google user",name, "this is email",email)
        const user = await this.getGoogleUserByEmail.execute(email)
        // console.log("this is the user", user)
        if (!(user instanceof UserNotFoundError)) {
            return notFound(new EmailInUseError())
        }
        const googleUserId = await this.createGoogleUserInterface.execute({
            email,
            family_name,
            name,
            picture,
            email_verified
        })

        return ok({ GoogleUserId: googleUserId })
    }

}

export namespace SignInGoogleUserController {
    export type Request = HttpRequest<CreateGoogleUserInterface.Request>;

    export type Response = HttpResponse<{ GoogleUserId: string } | EmailInUseError>;
}