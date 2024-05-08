import { LoadUserByIdInterface } from "@application/interfaces/use-cases/users/LoadUserByIdInterface";
import { BaseController } from "../BaseController";
import { DeletUserInterface } from "@application/interfaces/use-cases/users/DeletUserInterface";
import { forbidden, notFound, ok } from "@infra/http/helpers/https";
import { PermissionError } from "@infra/http/errors/PermissionError";
import { UserRole } from "@domain/entities/User";
import { HttpRequest } from "@infra/http/interfaces/http/HttpRequest";
import { HttpResponse } from "@infra/http/interfaces/http/HttpResponse";
import { UserNotFoundError } from "@application/errors/UserNotFoundError";

export class DeleteUserController extends BaseController {
    constructor(
        private readonly getUserById: LoadUserByIdInterface,
        private readonly deleteUserInterface: DeletUserInterface
    ) {
        super();
    }

    async execute(
        httpRequest: DeleteUserController.Request
    ): Promise<DeleteUserController.Response> {
        const role = httpRequest.userRole
        const user_id = httpRequest.userId!;
        const { id } = httpRequest.params!;
        const UserOrError = await this.getUserById.execute(id);
        if (UserOrError instanceof Error) {
            return notFound(UserOrError);
        }

        if (UserOrError!.id !== user_id && role !== UserRole.ADMIN) {
            return forbidden(new PermissionError());
        }

        await this.deleteUserInterface.execute(id);

        return ok({ message: "User deleted succcessfuly!" });
    }
}

export namespace DeleteUserController {
    export type Request = HttpRequest<DeletUserInterface.Request, undefined>;
    export type Response = HttpResponse<
        undefined | UserNotFoundError | PermissionError
    >;
}
