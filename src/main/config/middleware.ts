import { jsonparser, urlencodedparser } from "@main/middlewares/body-parser"
import { multerMiddleware } from "@main/middlewares/multer-middleware";

import express, { Express } from "express"
import passport from "passport";
import session from 'express-session'

export const setupMiddleware = (app: Express): void => {
    // app.use(bodyparser);
    // app.use(bodyparser.urlencoded({ extended: true }));

    app.use(jsonparser);
    app.use(urlencodedparser);
    app.use(session({
        secret: 'testttt', // Replace with a secret key for session encryption
        resave: false,
        saveUninitialized: false
      }));
    app.use(passport.initialize());
    app.use(passport.session());

    // ? setup the multer middleware here

    const myMiddleware = (req: any, res: any, next: any) => {
        console.log("Middleware executed");
        Object.assign(req, { "name": "middleware" })
        next();
    };

    // app.use(multerMiddleware([
    //     {
    //         name: 'images',
    //         maxCount: 5,
    //     },
    // ]));

}

// const storage = multer.diskStorage({
//     destination: 'uploads/',
//     filename: (req, file, cb) => {
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//         cb(null, file.fieldname + '-' + uniqueSuffix);
//     }
// });

// const upload = multer({
//     storage: storage, fileFilter: (req, file, cb) => {
//         // Additional checks based on req.body (e.g., title length)
//         // console.log(req.body);
//         const signUpValidation = makeSignUpValidation();

//         const error = signUpValidation?.validate(req);
//         if (error) {
//             console.log(badRequest(error));
//             return badRequest(error);
//         }
//         //  error = this.validation?.validate(req);
//         // if (req.body.name.length === 0) {
//         //     // console.log(req.body.role);
//         //     return cb(new MissingParamError(req.body.name));
//         // }

//         // Check allowed file types based on mimetype or extension
//         // if (!file.mimetype.startsWith('image/')) {
//         //     return cb(new Error('Only image files are allowed'));
//         // }

//         cb(null, true); // Accept the file if all checks pass
//     }
// });



// const storage = multer.diskStorage({
//     destination: 'uploads/',
//     filename: (req, file, cb) => {
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//         cb(null, file.fieldname + '-' + uniqueSuffix);
//     }
// });

// const upload = multer({
//     storage: storage, fileFilter: (req, file, cb) => {

//         // console.log(req.body);

//         // ! change it to injected validation
//         const signUpValidation = makeSignUpValidation();

//         const error = signUpValidation?.validate(req);
//         if (error) {
//             console.log(badRequest(error));
//             return badRequest(error);
//         }

//         // if (req.body.name.length === 0) {
//         //     // console.log(req.body.role);
//         //     return cb(new MissingParamError(req.body.name));
//         // }

//         // Check allowed file types based on mimetype or extension
//         // if (!file.mimetype.startsWith('image/')) {
//         //     return cb(new Error('Only image files are allowed'));
//         // }

//         cb(null, true); // Accept the file if all checks pass
//     }
// });

// return upload.single('image')(req, res, next);



// const test = new MulterMiddleware();



// const upload = multer({ dest: 'uploads/' });
