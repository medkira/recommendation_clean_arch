export interface PostImageProcess {
    PostImageProcess(imageBuffer: Buffer): Promise<Buffer>;
}