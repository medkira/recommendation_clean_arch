import { UseCase } from "../UseCase";
import { PlaceProps } from "@domain/entities/Place";

export interface CreatePlaceInterface
  extends UseCase<CreatePlaceInterface.Request, CreatePlaceInterface.Response> {
  execute(
    placeData: CreatePlaceInterface.Request
  ): Promise<CreatePlaceInterface.Response>;
}

export namespace CreatePlaceInterface {
  export type Request = Omit<PlaceProps, "id">; // { email: string, password: string };
  export type Response = string;
}
