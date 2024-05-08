import { GetUsersRepository } from "@application/interfaces/repositories/users/GetUsersRepository";
import { GetUsersInterface } from "@application/interfaces/use-cases/users/GetUsersInterface";

export class GetUsers implements GetUsersInterface {
    constructor(
        private readonly getUsersRepository: GetUsersRepository
    ) { }
    async execute(params: GetUsersInterface.Request): Promise<GetUsersInterface.Response> {
        const { page = 1, role, isEmailVerified } = params;
        const paginationLimit = 10;

        return this.getUsersRepository.getUsers({
            page, paginationLimit,
            query: {
                ...role && { role },
                ...isEmailVerified && { isEmailVerified },
                // ...(type ? { type } : {}),
                // ...(location ? { location } : {})
            }
        });


    }

}