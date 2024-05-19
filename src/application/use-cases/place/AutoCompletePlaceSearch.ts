import { AutoCompletePlaceSearchRepository } from "@application/interfaces/repositories/place/AutoCompletePlaceSearchRepository";
import { AutoCompletePlaceSearchInterface } from "@application/interfaces/use-cases/places/AutoCompletePlaceSearchInterface";

export class AutoCompletePlaceSearch implements AutoCompletePlaceSearchInterface {

    constructor(
        private readonly autoCompletePlaceSearchRepository: AutoCompletePlaceSearchRepository
    ) { }

    async execute(params: AutoCompletePlaceSearchInterface.Request): Promise<AutoCompletePlaceSearchInterface.Response> {
        return await this.autoCompletePlaceSearchRepository.autoCompletePlaceSearch({ query: params.query })
    }

}