import { Rate } from "@domain/entities/Rates";

export interface GetRateByIdRepository {
    getRateById(
        RateId: GetRateByIdRepository.Request
    ): Promise<GetRateByIdRepository.Response>;
}

export namespace GetRateByIdRepository {
    export type Request = string;
    export type Response = Rate | null;
}
