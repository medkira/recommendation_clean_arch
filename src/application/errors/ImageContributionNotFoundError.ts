export class ImageContributionNotFoundError extends Error {
    constructor() {
        super("The Image Contribution was not found");
        this.name = "ImageContribution";
    }
}

