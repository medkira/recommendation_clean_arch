import { serverError } from "../helpers/https";
import { HttpRequest } from "../interfaces/http/HttpRequest";
import { HttpResponse } from "../interfaces/http/HttpResponse";

export abstract class BaseMiddleware {
    abstract execute(httpRequest: HttpRequest): Promise<HttpResponse>;

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            return await this.execute(httpRequest);
        } catch (error) {
            return serverError(error);
        }
    }
}