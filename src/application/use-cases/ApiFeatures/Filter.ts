import { FilterInterface } from "@application/interfaces/use-cases/ApiFeatures/FilterInterface";
import { FilterRepositoryImpl } from "@infra/db/mongodb/repositories/FilterRepositoryImpl";

export class Filter implements FilterInterface {
  constructor(private readonly filterRepositoryImpl: FilterRepositoryImpl) {}
  execute(params: FilterInterface.Request): Promise<any> {
    return this.filterRepositoryImpl.filter(params);
  }
}
