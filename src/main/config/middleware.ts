import { bodyparser } from "@main/middlewares/body-parser"
import { Express } from "express"

export const setupMiddleware = (app: Express): void => {
    app.use(bodyparser)
}