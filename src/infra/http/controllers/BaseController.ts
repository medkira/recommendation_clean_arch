import { HttpResponse } from "../interfaces/http/HttpResponse";
import { HttpRequest } from "../interfaces/http/HttpRequest";
import { Validation } from "../interfaces/validation/validations";
import { badRequest, serverError } from "../helpers/https";



export abstract class BaseController {
    constructor(private readonly validation?: Validation) { }

    abstract execute(httpRequest: HttpRequest): Promise<HttpResponse>;

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validation?.validate(httpRequest);
            if (error) {
                return badRequest(error);
            } else {
                return await this.execute(httpRequest);
            }
        } catch (error) {
            return serverError(error);
        }

    }
}