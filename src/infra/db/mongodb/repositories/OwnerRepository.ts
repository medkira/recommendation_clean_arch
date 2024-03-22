
import ownerModel from "../models/owner.model";
import { isValidObjectId, mapDocument, objectIdToString, stringToObjectId } from "../helpers/mappers";
import { CreateOwnerRepository } from "@application/interfaces/repositories/owner/CreateOwnerRepository";
import { LoadOwnerByEmailRepository } from "@application/interfaces/repositories/owner/LoadOwnerByEmailRepository";
import { LoadOwnerByIdlRepository } from "@application/interfaces/repositories/owner/LoadOwnerByIdRepository";
import { UpdateOwnerPasswordRepository } from "@application/interfaces/repositories/owner/UpdateOwnerPasswordRepository";

export class OwnerRepository implements
    CreateOwnerRepository, LoadOwnerByEmailRepository, LoadOwnerByIdlRepository, UpdateOwnerPasswordRepository {

    async updateOwnerPassword(params: UpdateOwnerPasswordRepository.Request): Promise<UpdateOwnerPasswordRepository.Response> {
        const { id, password } = params;

        await ownerModel.findByIdAndUpdate(
            stringToObjectId(id),
            { password }
        )

        return { id };
    }


    async loadUserById(id: string): Promise<LoadOwnerByIdlRepository.response> {
        if (!isValidObjectId(id)) {
            return null;
        }

        const rawuser = await ownerModel.findById(id);
        return rawuser && mapDocument(rawuser);
    }

    async loadUserByEmail(email: string): Promise<LoadOwnerByEmailRepository.response> {
        const rawuser = await ownerModel.findOne({ email });
        return rawuser && mapDocument(rawuser);
    }

    async createOwner(userData: CreateOwnerRepository.Request): Promise<CreateOwnerRepository.Response> {
        // console.log(userData);
        const user = new ownerModel({
            ...userData,
            createdAt: new Date(),
        });
        const savedUser = await user.save();
        const userId = objectIdToString(savedUser._id);

        return { id: userId };
    }

}