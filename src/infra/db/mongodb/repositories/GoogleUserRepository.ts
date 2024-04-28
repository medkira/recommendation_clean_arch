import { GetGoogleUserByEmailRepository } from "@application/interfaces/repositories/googleUser/GetGoogleUserByEmailRepository";
import googleUserModel from "../models/googleUser.model";
import { isValidObjectId, mapDocument, objectIdToString } from "../helpers/mappers";
import { CreateGoogleUserRepository } from "@application/interfaces/repositories/googleUser/CreateGoogleUserRepository";
import { GetGoogleUserByIdRepository } from "@application/interfaces/repositories/googleUser/GetGoogleUserByIdRepository";



export class GoogleUserRepository implements GetGoogleUserByEmailRepository, CreateGoogleUserRepository, GetGoogleUserByIdRepository {

    async createGoogleUser(userData: CreateGoogleUserRepository.Request): Promise<CreateGoogleUserRepository.Response> {
        // console.log(userData);
        const user = new googleUserModel({
            ...userData,
            createdAt: new Date(),
        });
        // console.log("from google user repository::::",user)
        const savedUser = await user.save();
        const userId = objectIdToString(savedUser._id);

        return { id: userId };
    }

    async getGoogleUserByEmail(email: string): Promise<GetGoogleUserByEmailRepository.Response> {
        const rawuser = await googleUserModel.findOne({ email });

        return rawuser && mapDocument(rawuser);
    }

    async getGoogleUserById(id: string): Promise<any> {
        if (!isValidObjectId(id)) {
            return null;
        }


        const rawuser = await googleUserModel.findById(id);

        return rawuser && mapDocument(rawuser);
    }
}