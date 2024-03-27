import { BaseController } from "@infra/http/controllers/BaseController";
import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";
import { Request, Response } from "express";

export const expressRouterAdapter = (
    controller: BaseController,
) => async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
        body: req.body,
        params: req.params,
        query: req.query,
        headers: req.headers,
        files: req.files,
        userId: req.userId,
        userRole: req.userRole,

        host: req.get('host'),
        protocole: req.protocol,

    }
    const httpResponse = await controller.handle(httpRequest);

    if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
        res.status(httpResponse.statusCode).json(httpResponse.body);
    } else {
        res.status(httpResponse.statusCode).json({
            error: httpResponse.body?.message,
        })
    }
}