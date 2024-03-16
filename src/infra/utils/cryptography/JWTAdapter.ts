import { JWTGenerator } from "@application/interfaces/utils/cryptography/JWTGenerator.js";
import { JWTVerifier } from "@application/interfaces/utils/cryptography/JWTVerifier.js";
import { DecodedToken } from "@domain/entities/TokenPayload";
import jwt from "jsonwebtoken";

export class JWTAdapter implements JWTGenerator, JWTVerifier {
  constructor(private readonly secret: string) { }

  async generate(payload: any): Promise<string> {
    return jwt.sign(payload, this.secret);
  }

  async verify(token: string): Promise<Pick<DecodedToken, 'payload'> | null> {
    try {
      return jwt.verify(token, this.secret) as Pick<DecodedToken, 'payload'>;
    } catch (error) {
      return null;
    }
  }
}
