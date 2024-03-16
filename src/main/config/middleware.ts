import { jsonparser, urlencodedparser } from "@main/middlewares/body-parser"
import { multerMiddleware } from "@main/middlewares/multer-middleware";

import express, { Express } from "express"

export const setupMiddleware = (app: Express): void => {
    app.use(jsonparser);
    app.use(urlencodedparser);
}
