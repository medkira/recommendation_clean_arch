import { badRequest } from "@infra/http/helpers/https";
import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";
import { BaseMiddleware } from "@infra/http/middlewares/BaseMiddlewares";
import { makeSignUpValidation } from "@main/factories/controllers/authentication/sign-up/validation-factory";
import { NextFunction } from "express";
import { Request, Response } from "express";
import multer from "multer";

export const expressMiddlewareAdaptor =
    (middleware: BaseMiddleware) =>
        async (req: Request, res: Response, next: NextFunction) => {

            const htttpRequest: HttpRequest = {
                body: req.body,
                params: req.params,
                headers: req.headers,
            }


            const httpResponse = await middleware.handle(htttpRequest);
            if (httpResponse.statusCode === 200) {
                Object.assign(req, httpResponse.body);
                next();
            } else {
                res.status(httpResponse.statusCode).json({
                    error: httpResponse.body?.message,
                });
            }

        }