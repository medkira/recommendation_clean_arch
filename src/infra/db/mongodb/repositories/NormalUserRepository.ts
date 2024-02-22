import normalUserModel from "../models/normalUser.model";
import { mapDocument, objectIdToString } from "../helpers/mappers";
import { CreateNormalUserRepository } from "@application/interfaces/repositories/normalUser/CreateNoramlUserRepository";
import { LoadNormalUserByEmailRepository } from "@application/interfaces/repositories/normalUser/LoadNormalUserByEmailRepository";

export class NormalUserRepository implements CreateNormalUserRepository, LoadNormalUserByEmailRepository {

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