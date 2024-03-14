import multer from "multer";


// ? in this part we declare the storage: cloud / local etc..
// ! need to be changed to adept to where file gonna be saved, 

// const storage = multer.diskStorage({
//     destination: 'uploads/',
//     filename: (req, file, cb) => {
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//         cb(null, file.fieldname + '-' + uniqueSuffix);
//     }
// });

const storage = multer.memoryStorage();

const upload = multer({

    storage: storage, fileFilter: (req, file, cb) => {
        // Check allowed file types based on mimetype or extension
        if (!file.mimetype.startsWith('image/')) {
            return cb(new Error('Only image files are allowed'));
        }

        cb(null, true); // Accept the file if all checks pass

    }
});

// export const multerMiddleware = upload.single('image');

// ! need to fix arrayOfFields: any
export const multerMiddleware = (arrayOfFields: any) =>
    upload.fields(arrayOfFields);


