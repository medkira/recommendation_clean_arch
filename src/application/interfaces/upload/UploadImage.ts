export interface UploadImage {
    uploadImage(buffer: Buffer): Promise<string>;
}