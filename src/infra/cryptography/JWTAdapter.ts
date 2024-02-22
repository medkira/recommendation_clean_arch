import { JWTGenerator } from "@application/interfaces/cryptography/JWTGenerator.js";
import { JWTVerifier } from "@application/interfaces/cryptography/JWTVerifier.js";
import jwt from "jsonwebtoken";

export class JWTAdapter implements JWTGenerator, JWTVerifier {
  constructor(private readonly secret: string) { }

  async generate(payload: any): Promise<string> {
    return jwt.sign(payload, this.secret);
  }

  async verify(token: string): Promise<string | null> {
    try {
      return jwt.verify(token, this.secret) as string;
    } catch (error) {
      return null;
    }
  }
}
