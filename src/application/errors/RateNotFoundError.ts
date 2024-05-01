export class RateNotFoundError extends Error {
    constructor() {
        super("The rate was not found");
        this.name = "RateNotFoundError";
    }
}
