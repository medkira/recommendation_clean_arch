import { UseCase } from "../UseCase";



export interface DeleteMenuInterface
  extends UseCase<DeleteMenuInterface.Request, DeleteMenuInterface.Response> {
  execute(menuData: DeleteMenuInterface.Request): Promise<DeleteMenuInterface.Response>;
}

export namespace DeleteMenuInterface {
  export type Request = string;
  export type Response = void;
}