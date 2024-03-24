import { jsonparser, urlencodedparser } from "@main/middlewares/body-parser"
import { Express } from "express"


export const setupMiddleware = (app: Express): void => {
    app.use(jsonparser);
    app.use(urlencodedparser);
    // app.use(session({
    //     secret: 'testttt', // Replace with a secret key for session encryption
    //     resave: false,
    //     saveUninitialized: false
    // }));
    // app.use(passport.initialize());
    // app.use(passport.session());
}
