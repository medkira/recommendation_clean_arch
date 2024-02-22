
export class ServerError extends Error {
    constructor(stack?: string) {
        console.log("------------------------------------------------");
        console.log(stack);
        console.log("------------------------------------------------");
        super('Internal server error');
        this.name = 'ServerError';
        this.stack = stack;
    }
}