import { DecodedToken } from "@domain/entities/TokenPayload";

export interface JWTVerifier {
  verify(jwt: string): Promise<Pick<DecodedToken, 'payload'> | null>;
}
