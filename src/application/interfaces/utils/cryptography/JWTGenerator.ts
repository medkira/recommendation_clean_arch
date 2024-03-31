import { DecodedTokenProps } from "@domain/entities/TokenPayload";
import { name } from "ejs";

export interface JWTGenerator {
  generate(payload: any): Promise<string>;
}

