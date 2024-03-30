import express, { Express } from "express";
import { setupSocket } from "./socket";
import { setupRoutes } from "./routes";
import { setupMiddleware } from "./middleware";
import { setupViewEngine } from "./view-engine";

export const setupApp = (): Express => {
    const app = express();
    // ? put anything that the express will use
    setupViewEngine(app);
    setupSocket(app);
    setupMiddleware(app);
    setupRoutes(app);



    return app;
}