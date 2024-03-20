export class EmailNotFoundError extends Error {
    constructor() {
        super('Email was not found');
        this.name = 'EmailNotFoundError';
    }
}