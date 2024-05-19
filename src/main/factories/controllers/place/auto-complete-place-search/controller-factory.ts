import { BaseController } from "@infra/http/controllers/BaseController";
import { AutoCompletePlaceSearchController } from "@infra/http/controllers/place/AutoCompletePlaceSearchController";
import { makeAutoCompletePlaceSearch } from "@main/factories/use-case/place/autocomplete-place-search-factory";
import { autoCompletePlaceSearchValidation } from "./validation-factory";

export const makeAutoCompletePlaceSearchController = (): BaseController => {
    const validation = autoCompletePlaceSearchValidation()
    const autoCompletePlaceSearch = makeAutoCompletePlaceSearch();

    return new AutoCompletePlaceSearchController(validation, autoCompletePlaceSearch)
}