import express, { Express } from "express";
import { setupSocket } from "./socket";
import { setupRoutes } from "./routes";
import { setupMiddleware } from "./middleware";
import bodyParser from "body-parser";

export const setupApp = (): Express => {
    const app = express();


    // ! change this 
    app.set('view engine', 'ejs');
    app.set('views', '/home/mohamed/workspace/pfe/src/main/presentation/');


    // ? put anything that the express will use
    setupSocket(app);
    setupMiddleware(app);
    setupRoutes(app);


    return app;
}