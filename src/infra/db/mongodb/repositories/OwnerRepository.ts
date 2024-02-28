
import ownerModel from "../models/owner.model";
import { mapDocument, objectIdToString } from "../helpers/mappers";
import { CreateOwnerRepository } from "@application/interfaces/repositories/owner/CreateOwnerRepository";
import { LoadOwnerByEmailRepository } from "@application/interfaces/repositories/owner/LoadOwnerByEmailRepository";

export class OwnerRepository implements CreateOwnerRepository, LoadOwnerByEmailRepository {

    async loadUserByEmail(email: string): Promise<LoadOwnerByEmailRepository.response> {
        const rawuser = await ownerModel.findOne({ email });
        return rawuser && mapDocument(rawuser);
    }

    async createOwner(userData: CreateOwnerRepository.Request): Promise<CreateOwnerRepository.Response> {

        const user = new ownerModel({
            ...userData,
            createdAt: new Date(),
        });
        const savedUser = await user.save();
        const userId = objectIdToString(savedUser._id);

        return { id: userId };
    }

}