import { NextFunction } from "express";
import { Request, Response } from "express";

export const multerMiddlewareAdapter =
  (middleware: any) =>
    async (req: Request, res: Response, next: NextFunction) => {

      middleware(req, res, (err: any) => {
        if (err) {
          return res.status(400).send({ message: err.message })
        }
        next();
      });

    }