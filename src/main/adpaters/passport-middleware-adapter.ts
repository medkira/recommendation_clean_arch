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
        // {
        //   successRedirect: '/'
        // },
        (error: any, user: any, info: any) => {
          // console.log("from passport middleware Adapter ", user)
          if (error) {
            return next(error);
          }
          if (!user) {
            return res.status(401).json({ message: "Authentication failed" });
          }
          Object.assign(req.body, user._json);
          next();
        }
      )(req, res, next);
    };
