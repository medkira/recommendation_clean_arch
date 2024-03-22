export interface HashComparer {
  compare(plaintext: String, hash: String): Promise<boolean> | boolean;
}
