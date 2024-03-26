import { Request, Response, NextFunction } from "express";
import passport from "passport";
import { options } from "@main/middlewares/passport-middleware"; // this in not  a middleware => this a config

// as u see by calling it here evreything works fine also
options;


export const passportMiddlewareAdapter =
  (strategy: any) =>
    async (req: Request, res: Response, next: NextFunction) => {
      passport.authenticate(
        strategy,

        (error: any, user: any, info: any) => {
          if (error) {
            return next(error);
          }
          if (!user) {
            return res.status(401).json({ message: "Authentication failed" });
          }
          req.user = user._json;

          // console.log("tetstttt from middleware", req.user);
          next();
        }
      )(req, res, next);
    };
