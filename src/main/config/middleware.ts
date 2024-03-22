import { jsonparser, urlencodedparser } from "@main/middlewares/body-parser"
import { multerMiddleware } from "@main/middlewares/multer-middleware";

import express, { Express } from "express"
import passport from "passport";
import session from 'express-session'

export const setupMiddleware = (app: Express): void => {
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
