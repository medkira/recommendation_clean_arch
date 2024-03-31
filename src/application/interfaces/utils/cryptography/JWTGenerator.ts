export interface JWTGenerator {
  generate(payload: any): Promise<string>;
}
