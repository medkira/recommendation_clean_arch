import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";
import { HttpResponse } from "@infra/http/interfaces/http/HttpResponse";
import { BaseController } from "../BaseController";
import { forbidden, ok } from "@infra/http/helpers/https";
import { AuthenticateInterface } from "@application/interfaces/use-cases/authentication/AuthenticateInterface";
import { VerifyTotpInterface } from "@application/interfaces/use-cases/totp/VerifyTotpInterface";
import { ForbiddenError } from "@application/errors/ForbiddenError";
import { ResetUserPasswordInterface } from "@application/interfaces/use-cases/resetpassword/ResetUserPasswordInterface";
import { DeleteTotpByUserIdInterface } from "@application/interfaces/use-cases/totp/DeleteTotpByUserIdInterface";

export class renderSetNewPasswordController extends BaseController {

    constructor(
        private readonly authenticate: AuthenticateInterface,
        private readonly verifyTotp: VerifyTotpInterface,
        private readonly deleteTotp: DeleteTotpByUserIdInterface,
        private readonly resetUserPassword: ResetUserPasswordInterface,

    ) {
        super()
    }


    async execute(httpRequest: renderSetNewPasswordController.Request): Promise<renderSetNewPasswordController.Response> {
        const { token } = httpRequest.query!;


        const payloadOrError = await this.authenticate.execute(token) as { code: string, userId: string };

        if (payloadOrError instanceof ForbiddenError) {
            return forbidden(payloadOrError);
        }

        const isTotpValidOrError = await this.verifyTotp.execute({ code: payloadOrError.code, userId: payloadOrError.userId });

        if (isTotpValidOrError instanceof ForbiddenError) {
            return forbidden(isTotpValidOrError);
        }
        await this.deleteTotp.execute(payloadOrError.userId);

        this.resetUserPassword.execute({ id: payloadOrError.userId, password: httpRequest.body!.password })

        // ? for test
        // console.log("password changed")

        // ? will return from here the page 

        // res.cookie('TokenCookie', authToken, { expires: expirationDate, httpOnly: false, sameSite: "strict", secure: true });
        // // Redirect to a URL
        // res.redirect(`${process.env.CLIENT_BASE_URL}/home`);

        // return ok({ view: 'test/home', token });

        return ok({ view: `${process.env.CLIENT_BASE_URL}/` });

    }

}



export namespace renderSetNewPasswordController {
    export type Request = HttpRequest<{ password: string }, undefined, { token: string }>;
    export type Response = HttpResponse<ResetUserPasswordInterface.Response>;
}