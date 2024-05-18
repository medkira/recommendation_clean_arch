import { SendEmailResetPasswordInterface } from "@application/interfaces/use-cases/resetpassword/SendEmailResetPasswordInterface";
import { SendEmailVerifyEmailInterface } from "@application/interfaces/use-cases/verifyEmail/SendEmailVerifyEmailInterface";
import { SendEmailResetPassword } from "@application/use-cases/resetpassword/SendEmailResetPassword";
import { SendEmailVerifyEmail } from "@application/use-cases/verifyemail/SendEmailVerifyEmail";
import { NormalUserRepository } from "@infra/db/mongodb/repositories/NormalUserRepository";
import { OwnerRepository } from "@infra/db/mongodb/repositories/OwnerRepository";
import { TotpRepository } from "@infra/db/mongodb/repositories/TotpRepository";
import { BcryptAdapter } from "@infra/utils/cryptography/BcryptAdapter";
import { JWTAdapter } from "@infra/utils/cryptography/JWTAdapter";
import { OTPAdapter } from "@infra/utils/cryptography/OTPAdapter";
import { SendEmailAdapter } from "@infra/utils/send-email/SendEmailAdapter";

export const makeSendEmailVerifyEmail = (): SendEmailVerifyEmailInterface => {
    const userRepository = new NormalUserRepository();
    const totpRepository = new TotpRepository();
    const sendEmailAdapter = new SendEmailAdapter();
    const otpAdapter = new OTPAdapter();
    const jwtAdapter = new JWTAdapter(process.env.JWT_SECRET);
    const bcryptAdapter = new BcryptAdapter(Number(process.env.BCRYPTSALT));

    return new SendEmailVerifyEmail(
        userRepository, totpRepository,
        sendEmailAdapter, otpAdapter, jwtAdapter, bcryptAdapter
    );
}