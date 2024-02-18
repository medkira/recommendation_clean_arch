import express, { Express } from "express";
import { setupSocket } from "./socket";
import { setupRoutes } from "./routes";
import { setupMiddleware } from "./middleware";

export const setupApp = (): Express => {
    const app = express();
    // ? put anything that the express will use
    setupSocket(app);
    setupRoutes(app);

    setupMiddleware(app);

    return app;
}