export interface HashGenerator {
  hash(data: String): Promise<string>;
}
