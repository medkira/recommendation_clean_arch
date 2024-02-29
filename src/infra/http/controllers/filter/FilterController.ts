import { FilterInterface } from "@application/interfaces/use-cases/ApiFeatures/FilterInterface";
import { BaseController } from "../BaseController";
import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";
import { HttpResponse } from "@infra/http/interfaces/http/HttpResponse";



export class FilterController extends BaseController {
    
    constructor(
        private readonly filter: FilterInterface,
    )
    {
        super()
    }


    execute(httpRequest: HttpRequest): Promise<HttpResponse> {
      

    }
}