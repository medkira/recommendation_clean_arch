export class PlaceNotFoundError extends Error {
  constructor() {
    super("The place was not found");
    this.name = "PlaceNotFoundError";
  }
}
