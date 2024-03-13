// upload-routes.ts
import { Router } from "express";
import multer from "multer";
import sharp from "sharp";

export default (router: Router): void => {
    // Define middleware for all routes under '/upload'


    const upload = multer({ dest: 'uploads/' });
    // Define the image upload route
    router.post('/upload/image', async (req, res) => {
        const uploadedFile = req.file;
        try {
            await sharp(req.file!.buffer).resize({ width: 250, height: 250 }).png().toFile(`uploads/${req.file!.originalname}`)
            res.status(201).send('Image uploaded succesfully')
        } catch (error) {
            console.log(error)
            res.status(400).send(error)
        }
        console.log(req.file);
        // res.json(req.body);
    });
}
