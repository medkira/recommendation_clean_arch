import { Place } from "@domain/entities/Place";

export interface AutoCompletePlaceSearchRepository {
    autoCompletePlaceSearch(params: AutoCompletePlaceSearchRepository.Request): Promise<AutoCompletePlaceSearchRepository.Response>
}


export namespace AutoCompletePlaceSearchRepository {
    export type Request = { query: string };
    export type Response = Place[]
}