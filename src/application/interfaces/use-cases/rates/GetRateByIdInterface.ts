import { Rate } from "@domain/entities/Rates";
import { UseCase } from "../UseCase";
import { RateNotFoundError } from "@application/errors/RateNotFoundError";

export interface GetRateByIdInterface
    extends UseCase<
        GetRateByIdInterface.Request,
        GetRateByIdInterface.Response
    > {
    execute(RateId: GetRateByIdInterface.Request): Promise<GetRateByIdInterface.Response>;
}

export namespace GetRateByIdInterface {
    export type Request = string;
    export type Response = Rate | RateNotFoundError;
}
