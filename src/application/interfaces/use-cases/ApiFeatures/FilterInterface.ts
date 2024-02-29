import { ApiFeaturesProps } from "@domain/entities/ApiFeatures";
import { UseCase } from "../UseCase";

export interface FilterInterface
  extends UseCase<FilterInterface.Request, FilterInterface.Response> {
  execute(params: FilterInterface.Request): Promise<FilterInterface.Response>;
}

export namespace FilterInterface {
  export type Request = Pick<ApiFeaturesProps, "mongooseQuery" | "queryString">;
  export type Response = any;
}
