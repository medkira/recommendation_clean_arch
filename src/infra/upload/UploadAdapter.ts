import { UploadImage } from "@application/interfaces/upload/UploadImage";
import dotenv from "dotenv";
dotenv.config({ path: "src/main/config/env/.env" });

import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
export class UploadAdapter implements UploadImage {
  async uploadImage(imageBuffer: Buffer): Promise<string> {
    const url = await new Promise<string>((resolve, reject) => {
      cloudinary.v2.uploader
        .upload_stream(
          { resource_type: "image", folder: "profileImage" },
          (error, result) => {
            if (error) {
              reject(
                new Error(
                  `Error uploading image to Cloudinary: ${error.message}`
                )
              );
            } else {
              if (result?.secure_url) {
                // console.log(result.secure_url);
                resolve(result.secure_url);
              } else {
                reject(new Error("Secure URL not found in Cloudinary result"));
              }
            }
          }
        )
        .end(imageBuffer);
    });

    return url;
  }
}

// import { UploadImage } from "@application/interfaces/upload/UploadImage";

// import cloudinary from "cloudinary";

// cloudinary.v2.config({
//     cloud_name: "dpbb1gfnc",
//     api_key: "712488548523191",
//     api_secret: "p5QGTGQh5wQyl_OBtjbQ_rEqJfA",
// });
// export class UploadAdapter implements UploadImage {

//     async uploadImage(imageBuffer: Buffer): Promise<string> {
//         try {
//             // Upload the image to Cloudinary
//             const result = cloudinary.v2.uploader.upload_stream({ resource_type: 'image' }, async (error: any, result: any) => {
//                 if (error) {
//                     throw new Error(`Error uploading image to Cloudinary: ${error.message}`);
//                 }
//                 return result.secure_url;
//             }).end(imageBuffer);

//             // Return the URL of the uploaded image
//             return result;
//         } catch (error) {
//             throw new Error(`Error uploading image to Cloudinary: ${error}`);
//         }
//     }

// }

// return new Promise(
//     (resolve) => {
//         cloudinary.v2.uploader.upload_stream((error, uploadResult) => {
//             return resolve(uploadResult?.url);
//         }).end(imageBuffer);
//     }
// ).then((uploadResult) => {
//     console.log(uploadResult?.url)
// })

// const uploadResult = await new Promise<string>((resolve) => {
//     cloudinary.v2.uploader.upload_stream((error, uploadResult) => {
//         return resolve(uploadResult?.url);
//     }).end(imageBuffer);
// });
