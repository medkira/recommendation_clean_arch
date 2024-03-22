import authenticationRoutes from "@main/routes/authentication-routes";
import commentRoutes from "@main/routes/comment-routes";
import foodRoutes from "@main/routes/food-routes";
import googleAuthRoutes from "@main/routes/googleAuth-routes";
import menuRoutes from "@main/routes/menu-routes";
import normaUserRoutes from "@main/routes/normaUser-routes";
import placeRoutes from "@main/routes/place-routes";
import postRoutes from "@main/routes/post-routes";

import uploadRoutes from "@main/routes/upload-routes";
import { Express, Router } from "express";

export const setupRoutes = (app: Express): void => {
  const router = Router();
  // ? declare the server routes here
  app.use("/api", router);

  authenticationRoutes(router);
  placeRoutes(router);
  postRoutes(router);
  uploadRoutes(router);
  commentRoutes(router);
  menuRoutes(router);
  foodRoutes(router);
  normaUserRoutes(router);
  googleAuthRoutes(router);
};

