export class FoodNotFoundError extends Error {
  constructor() {
    super("The food was not found");
    this.name = "FoodNotFoundError";
  }
}
