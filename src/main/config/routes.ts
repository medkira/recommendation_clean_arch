import authenticationRoutes from "@main/routes/authentication-routes";
import commentRoutes from "@main/routes/comment-routes";
import foodRoutes from "@main/routes/food-routes";
import googleAuthRoutes from "@main/routes/googleAuth-routes";
import imageContributionRoutes from "@main/routes/image-contribution-routes";
import menuRoutes from "@main/routes/menu-routes";
import placeRoutes from "@main/routes/place-routes";
import postRoutes from "@main/routes/post-routes";
import rateRoutes from "@main/routes/rate-routes";
import resetPassRoutes from "@main/routes/reset-password-routes";
import userRoutes from "@main/routes/user-routes";
import verifyEmailRoutes from "@main/routes/verify-email-routes";
import dataScrappingRoutes from "@main/routes/data-scrapping-route";
import { Express, Router } from "express";

export const setupRoutes = (app: Express): void => {
  const router = Router();
  app.use("/api", router);

  authenticationRoutes(router);
  resetPassRoutes(router);
  verifyEmailRoutes(router);
  placeRoutes(router);
  postRoutes(router);
  commentRoutes(router);
  menuRoutes(router);
  foodRoutes(router);
  rateRoutes(router);
  googleAuthRoutes(router);
  imageContributionRoutes(router);
  userRoutes(router);
  dataScrappingRoutes(router)
};



