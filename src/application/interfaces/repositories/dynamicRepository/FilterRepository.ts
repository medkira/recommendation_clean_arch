import { ApiFeaturesProps } from "@domain/entities/ApiFeatures";

export interface FilterRepository {
  filter(params: FilterRepository.Request): Promise<FilterRepository.Response>;
}

export namespace FilterRepository {
  export type Request = Pick<ApiFeaturesProps, "mongooseQuery" | "queryString">;
  export type Response = any;
}
