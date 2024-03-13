import { NextFunction } from "express";
import { Request, Response } from "express";

export const multerMiddlewareAdapter =
    (middleware: any) =>
        async (req: Request, res: Response, next: NextFunction) => {

            middleware(req, res, (err: any) => {
                console.log("from multer midd adapter ", req.files)
                if (err) {
                    return res.status(400).send({ message: err.message })
                }

                // Object.assign(req, req.files);


                next();
            });




            // if (httpResponse.statusCode === 200) {
            //     Object.assign(req, httpResponse.body);

            // } else {
            //     res.status(httpResponse.statusCode).json({
            //         error: httpResponse.body?.message,
            //     });
            // }

        }