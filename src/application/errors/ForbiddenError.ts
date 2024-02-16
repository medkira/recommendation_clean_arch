export class ForbiddenError extends Error {
    constructor() {
        super('Forbiden');
        this.name = 'ForbiddenError';
    }
}