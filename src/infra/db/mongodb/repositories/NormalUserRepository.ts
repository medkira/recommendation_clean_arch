import normalUserModel from "../models/normalUser.model";
import { isValidObjectId, mapDocument, objectIdToString, stringToObjectId } from "../helpers/mappers";
import { CreateNormalUserRepository } from "@application/interfaces/repositories/normalUser/CreateNoramlUserRepository";
import { LoadNormalUserByEmailRepository } from "@application/interfaces/repositories/normalUser/LoadNormalUserByEmailRepository";
import { LoadOwnerByIdlRepository } from "@application/interfaces/repositories/owner/LoadOwnerByIdRepository";
import { UpdateNormalUserPasswordRepository } from "@application/interfaces/repositories/normalUser/updateNormalUserPasswordRepository";
import { LoadNormalUserByIdRepository } from "@application/interfaces/repositories/normalUser/LoadNormalUserByIdRepository";

export class NormalUserRepository implements
    CreateNormalUserRepository, LoadNormalUserByEmailRepository, LoadNormalUserByIdRepository, UpdateNormalUserPasswordRepository {

    async updateNormalUserPassword(params: UpdateNormalUserPasswordRepository.Request): Promise<UpdateNormalUserPasswordRepository.Response> {
        const { id, password } = params;

        await normalUserModel.findByIdAndUpdate(
            stringToObjectId(id),
            { password }

        )

        return { id };

    }

    async loadUserById(id: string): Promise<LoadNormalUserByIdRepository.response> {
        if (!isValidObjectId(id)) {
            return null;
        }

        const rawuser = await normalUserModel.findById(id);
        return rawuser && mapDocument(rawuser);
    }

    async loadUserByEmail(email: string): Promise<LoadNormalUserByEmailRepository.response> {
        const rawuser = await normalUserModel.findOne({ email });

        return rawuser && mapDocument(rawuser);
    }
    async createNormalUser(userData: CreateNormalUserRepository.Request): Promise<CreateNormalUserRepository.Response> {
        const user = new normalUserModel({
            ...userData,
            createdAt: new Date(),
        });
        const savedUser = await user.save();
        const userId = objectIdToString(savedUser._id);

        return { id: userId };
    }

}