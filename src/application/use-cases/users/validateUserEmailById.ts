import { VerfifyUserEmailByIdRepository } from "@application/interfaces/repositories/users/VerifyUserEmailRepository";
import { VerfifyUserEmailByIdInterface } from "@application/interfaces/use-cases/users/VerifyUserEmailInterface";

export class ValidateUserEmailById implements VerfifyUserEmailByIdInterface {
    constructor(
        private readonly validateUserEmailById: VerfifyUserEmailByIdRepository,
    ) { }

    async execute(id: string): Promise<void> {
        await this.validateUserEmailById.verfifyUserEmailById(id);
    }
}