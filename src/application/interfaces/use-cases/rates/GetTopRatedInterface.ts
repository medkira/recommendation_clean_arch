import { RateProps, Rate } from "@domain/entities/Rates";
import { UseCase } from "../UseCase";

export interface GetTopRatedInterface
  extends UseCase<GetTopRatedInterface.Request, GetTopRatedInterface.Response> {
  execute(
    RateDesc: GetTopRatedInterface.Request
  ): Promise<GetTopRatedInterface.Response>;
}

export namespace GetTopRatedInterface {
  export type Request = Pick<RateProps, "topCount" | "rated_name">;

  export type Response = Rate[];
}
