import { UploadImage } from "@application/interfaces/utils/upload/UploadImage";
import dotenv from 'dotenv';
dotenv.config({ path: 'src/main/config/env/.env' });

import cloudinary from "cloudinary";

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});
export class UploadAdapter implements UploadImage {

    async uploadImage(imageBuffer: Buffer): Promise<string> {

        const url = await new Promise<string>((resolve, reject) => {
            cloudinary.v2.uploader.upload_stream({ resource_type: 'image' }, (error, result) => {
                if (error) {
                    reject(new Error(`Error uploading image to Cloudinary: ${error.message}`));
                } else {
                    if (result?.secure_url) {
                        resolve(result.secure_url);
                    } else {
                        reject(new Error('Secure URL not found in Cloudinary result'));
                    }
                }
            }).end(imageBuffer);
        });

        return url;

    }

}

