import { jsonparser, urlencodedparser } from "@main/middlewares/body-parser"
import { multerMiddleware } from "@main/middlewares/multer-middleware";
import express, { Express } from "express"
import passport from "passport";


export const setupMiddleware = (app: Express): void => {
    app.use(jsonparser);
    app.use(urlencodedparser);

    app.use(passport.initialize());

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
