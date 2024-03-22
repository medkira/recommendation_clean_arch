import { GetGoogleUserByEmailRepository } from "@application/interfaces/repositories/googleUser/GetGoogleUserByEmailRepository";
import googleUserModel from "../models/googleUser.model";
import { mapDocument, objectIdToString } from "../helpers/mappers";
import { CreateGoogleUserRepository } from "@application/interfaces/repositories/googleUser/CreateGoogleUserRepository";



export class GoogleUserRepository implements GetGoogleUserByEmailRepository, CreateGoogleUserRepository {
    async createGoogleUser(userData: CreateGoogleUserRepository.Request): Promise<CreateGoogleUserRepository.Response> {
            // console.log(userData);
            const user = new googleUserModel({
                ...userData,
                createdAt: new Date(),
            });
            console.log("from google user repository::::",user)
            const savedUser = await user.save();
            const userId = objectIdToString(savedUser._id);
    
            return { id: userId };
        }
    
    async getGoogleUserByEmail(email: string): Promise<GetGoogleUserByEmailRepository.Response> {
        const rawuser = await googleUserModel.findOne({ email });

        return rawuser && mapDocument(rawuser);    }

}