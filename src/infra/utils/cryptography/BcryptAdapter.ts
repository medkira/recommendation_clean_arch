import { HashComparer } from "@application/interfaces/utils/cryptography/HashComparer.js";
import { HashGenerator } from "@application/interfaces/utils/cryptography/HashGenerator.js";
import bcrypt from "bcrypt";

export class BcryptAdapter implements HashGenerator, HashComparer {
  constructor(private readonly salt: number) { }

  async hash(value: string): Promise<string> {

    return bcrypt.hash(value, this.salt);
  }

  compare(plaintext: string, hash: string): Promise<boolean> {
    return bcrypt.compare(plaintext, hash);
  }
}
