import { EmailNotFoundError } from "@application/errors/EmailNotFundError";
import { LoadNormalUserByEmailRepository } from "@application/interfaces/repositories/normalUser/LoadNormalUserByEmailRepository";
import { LoadOwnerByEmailRepository } from "@application/interfaces/repositories/owner/LoadOwnerByEmailRepository";
import { CreateTotpRepository } from "@application/interfaces/repositories/totp/CreateTotpRepository";
import { SendEmailVerifyEmailInterface } from "@application/interfaces/use-cases/verifyEmail/SendEmailVerifyEmailInterface";
import { HashGenerator } from "@application/interfaces/utils/cryptography/HashGenerator";
import { JWTGenerator } from "@application/interfaces/utils/cryptography/JWTGenerator";
import { OTPGenerator } from "@application/interfaces/utils/cryptography/OTPGenerator";
import { SendEmail } from "@application/interfaces/utils/send-email/SendEmail";
import { NormalUser } from "@domain/entities/NormalUser";
import { Owner } from "@domain/entities/Owner";

export class SendEmailVerifyEmail implements SendEmailVerifyEmailInterface {

    constructor(
        private readonly loadNormalUserByEmailRepository: LoadNormalUserByEmailRepository,
        private readonly createTotpRepository: CreateTotpRepository,
        private readonly sendEamil: SendEmail,
        private readonly otpGenerator: OTPGenerator,
        private readonly jwtGenerator: JWTGenerator,
        private readonly hashGenerator: HashGenerator,




    ) { }

    async execute(request: SendEmailVerifyEmailInterface.Request): Promise<SendEmailVerifyEmailInterface.Response> {
        const { email, reqHost, reqProtocole } = request;

        let user: NormalUser | Owner | null = null;

        user = await this.loadNormalUserByEmailRepository.loadUserByEmail(email);


        if (!user) {
            return new EmailNotFoundError();
        }

        // ? i think i need a whole code for creating totp / in utils maybe 
        // ? or as a use case and we pass the totp throw this SendEmailVerifyEmail.request we add to it => totp

        const code = this.otpGenerator.generate();

        const expirationTime = new Date();
        expirationTime.setSeconds(expirationTime.getSeconds() + 300);


        const hashedCode = await this.hashGenerator.hash(code);


        await this.createTotpRepository.createTotp({
            userId: user?.id,
            code: hashedCode,
            expiresAt: expirationTime,
        });



        const token = await this.jwtGenerator.generate({ code, userId: user.id });

        const link = `${reqProtocole}://${reqHost}/api/email-verify-link?token=${token}&id=${user.id}`;

        // const html = ` <b>Hi ${user.username},</b>
        //                <p>Thank you for registering on our platform.</p>
        //                <p>Please, click the link below to verify your email address.</p>
        //                <a href="${link}">Verify Email</a>
        //             `
        const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Verification</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            color: #333;
        }
        .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            padding-bottom: 20px;
        }
        .header img {
            width: 50px;
            height: 50px;
        }
        .content {
            text-align: left;
        }
        .content p {
            line-height: 1.6;
        }
        .content a {
            display: inline-block;
            margin-top: 10px;
            padding: 10px 20px;
            color: #ffffff;
            background-color: #28a745;
            text-decoration: none;
            border-radius: 5px;
        }
        .footer {
            text-align: center;
            margin-top: 20px;
            font-size: 12px;
            color: #777;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="content">
            <b>Hi ${user.username},</b>
            <p>Thank you for registering on our platform.</p>
            <p>Please, click the link below to verify your email address.</p>
            <a href="${link}">Verify Email</a>
        </div>
        <div class="footer">
            <p>&copy; 2024 DealDiscover. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`;


        const payload = {
            email,
            subject: "DealDiscover Verify Email",
            html
        }

        this.sendEamil.send(email, payload);

        return 'email sent'

    }
}