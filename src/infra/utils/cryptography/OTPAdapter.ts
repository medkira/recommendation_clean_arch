import { OTPGenerator } from "@application/interfaces/utils/cryptography/OTPGenerator";

export class OTPAdapter implements OTPGenerator {

    generate(): string {
        const otp = Math.floor(1000 + Math.random() * 9000);

        return otp.toString();
    }

}

