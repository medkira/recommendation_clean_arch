import { DeleteUserRepository } from "@application/interfaces/repositories/users/DeletUserRepository";
import { DeletUserInterface } from "@application/interfaces/use-cases/users/DeletUserInterface";



export class DeletUser implements DeletUserInterface {
    constructor(private readonly DeletUserRepository: DeleteUserRepository) { }
    execute(
        userId: DeletUserInterface.Request
    ): Promise<DeletUserInterface.Response> {
        return this.DeletUserRepository.deletUser(userId);
    }
}
