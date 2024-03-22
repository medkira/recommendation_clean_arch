import { Request, Response, NextFunction } from "express";
import passport from "passport";

export const passportMiddlewareAdapter =
  (strategy: any, options?: any) =>
  async (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate(
      strategy,
      options,
      (error: any, user: any, info: any) => {
        if (error) {
          return next(error);
        }
        if (!user) {
          return res.status(401).json({ message: "Authentication failed" });
        }
        req.user = user._json;

        console.log("tetstttt from middleware", req.user);
        next();
      }
    )(req, res, next);
  };
