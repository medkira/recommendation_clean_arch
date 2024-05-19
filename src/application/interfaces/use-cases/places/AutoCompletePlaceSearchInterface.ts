import { Place } from "@domain/entities/Place";
import { UseCase } from "../UseCase";

export interface AutoCompletePlaceSearchInterface extends UseCase<AutoCompletePlaceSearchInterface.Request, AutoCompletePlaceSearchInterface.Response> {
    execute(params: AutoCompletePlaceSearchInterface.Request): Promise<AutoCompletePlaceSearchInterface.Response>;
}

export namespace AutoCompletePlaceSearchInterface {
    export type Request = { query: string };
    export type Response = Place[];
}