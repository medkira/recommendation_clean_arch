import multer from "multer";
const storage = multer.memoryStorage();

const upload = multer({

    storage: storage, fileFilter: (_, file, cb) => {
        if (!file.mimetype.startsWith('image/')) {
            return cb(new Error('Only image files are allowed'));
        }

        cb(null, true);

    }
});

// export const multerMiddleware = upload.single('image');
export const multerMiddleware = (arrayOfFields: multer.Field[]) =>
    upload.fields(arrayOfFields);


