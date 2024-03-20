export class MenuNotFoundError extends Error {
  constructor() {
    super("The menu was not found");
    this.name = "MenuNotFoundError";
  }
}
