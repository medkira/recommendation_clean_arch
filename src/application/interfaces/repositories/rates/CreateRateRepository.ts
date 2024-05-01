import { Rate } from "@domain/entities/Rates";

export interface CreateRateRepository {
    createRate(
        RateData: CreateRateRepository.Request
    ): Promise<CreateRateRepository.Response>;
}

export namespace CreateRateRepository {
    export type Request = Omit<
        Rate,
        "id" | "createdAt" | "updatedAt" | "totalComments"
    >;
    export type Response = string;
}
