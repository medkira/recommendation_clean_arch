import { RateProps } from "@domain/entities/Rates";
import { UseCase } from "../UseCase";

export interface CreateRateInterface extends UseCase<CreateRateInterface.Request, CreateRateInterface.Response> {
    execute(rateData: CreateRateInterface.Request): Promise<CreateRateInterface.Response>;
}

export namespace CreateRateInterface {
    export type Request = Omit<RateProps, "id" | "createdAt" | "updateAt" | "totalComments" | "topCount">;
    export type Response = string;
}