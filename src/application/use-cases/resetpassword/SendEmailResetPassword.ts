import { EmailNotFoundError } from "@application/errors/EmailNotFundError";
import { LoadNormalUserByEmailRepository } from "@application/interfaces/repositories/normalUser/LoadNormalUserByEmailRepository";
import { LoadOwnerByEmailRepository } from "@application/interfaces/repositories/owner/LoadOwnerByEmailRepository";
import { CreateTotpRepository } from "@application/interfaces/repositories/totp/CreateTotpRepository";
import { SendEmailResetPasswordInterface } from "@application/interfaces/use-cases/resetpassword/SendEmailResetPasswordInterface";
import { HashGenerator } from "@application/interfaces/utils/cryptography/HashGenerator";
import { JWTGenerator } from "@application/interfaces/utils/cryptography/JWTGenerator";
import { OTPGenerator } from "@application/interfaces/utils/cryptography/OTPGenerator";
import { SendEmail } from "@application/interfaces/utils/send-email/SendEmail";
import { NormalUser } from "@domain/entities/NormalUser";
import { Owner } from "@domain/entities/Owner";

export class SendEmailResetPassword implements SendEmailResetPasswordInterface {

    constructor(
        private readonly loadNormalUserByEmailRepository: LoadNormalUserByEmailRepository,
        private readonly loadOwnerByEmailRepository: LoadOwnerByEmailRepository,
        private readonly createTotpRepository: CreateTotpRepository,
        private readonly sendEamil: SendEmail,
        private readonly otpGenerator: OTPGenerator,
        private readonly jwtGenerator: JWTGenerator,
        private readonly hashGenerator: HashGenerator,




    ) { }

    async execute(request: SendEmailResetPasswordInterface.Request): Promise<SendEmailResetPasswordInterface.Response> {
        const { email, reqHost, reqProtocole } = request;

        let user: NormalUser | Owner | null = null;

        user = await this.loadNormalUserByEmailRepository.loadUserByEmail(email);
        if (!user) {
            user = await this.loadOwnerByEmailRepository.loadUserByEmail(email);
        }

        if (!user) {
            return new EmailNotFoundError();
        }

        // ? i think i need a whole code for creating totp / in utils maybe 
        // ? or as a use case and we pass the totp throw this SendEmailResetPassword.request we add to it => totp

        const code = this.otpGenerator.generate();

        const expirationTime = new Date();
        expirationTime.setSeconds(expirationTime.getSeconds() + 60);


        const hashedCode = await this.hashGenerator.hash(code);


        await this.createTotpRepository.createTotp({
            userId: user?.id,
            code: hashedCode,
            expiresAt: expirationTime,
        });



        const token = await this.jwtGenerator.generate({ code, userId: user.id });

        const link = `${reqProtocole}://${reqHost}/api/password-reset-link?token=${token}&id=${user.id}`;
        const html = `<b> Hi ${user.name}, </b>
                    <p> You requested to reset your password. </p>
                    <p> Please, click the link below to reset your password. </p>
                    <a href = "${link}"> Reset Password </a>
                    `

        const payload = {
            email,
            subject: "Password reset request",
            html
        }

        this.sendEamil.send(email, payload);

        return 'email sent'

    }
}