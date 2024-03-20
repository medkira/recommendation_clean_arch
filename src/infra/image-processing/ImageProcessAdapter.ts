import { PostImageProcess } from "@application/interfaces/image-processing/PostImageProcess";
import { ProfileImageProcess } from "@application/interfaces/image-processing/ProfileImageProcess";
import sharp from "sharp";
export class ImageProcessAdapter
  implements ProfileImageProcess, PostImageProcess
{
  PostImageProcess(imageBuffer: Buffer): Promise<Buffer> {
    return sharp(imageBuffer)
      .resize(2000, 1333)
      .toFormat("jpeg")
      .jpeg({ quality: 95 })
      .toBuffer();
  }

  ProfileImageProcess(imageBuffer: Buffer): Promise<Buffer> {
    return sharp(imageBuffer)
      .resize(600, 600)
      .toFormat("jpeg")
      .jpeg({ quality: 95 })
      .toBuffer();
  }
}
