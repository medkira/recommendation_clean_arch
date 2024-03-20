export interface ProfileImageProcess {
    ProfileImageProcess(imageBuffer: Buffer): Promise<Buffer>;
}