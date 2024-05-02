import normalUserModel from "../models/normalUser.model";
import { isValidObjectId, mapDocument, objectIdToString, stringToObjectId } from "../helpers/mappers";
import { CreateNormalUserRepository } from "@application/interfaces/repositories/normalUser/CreateNoramlUserRepository";
import { LoadNormalUserByEmailRepository } from "@application/interfaces/repositories/normalUser/LoadNormalUserByEmailRepository";
import { LoadOwnerByIdlRepository } from "@application/interfaces/repositories/owner/LoadOwnerByIdRepository";
import { UpdateNormalUserPasswordRepository } from "@application/interfaces/repositories/normalUser/updateNormalUserPasswordRepository";
import { LoadNormalUserByIdRepository } from "@application/interfaces/repositories/normalUser/LoadNormalUserByIdRepository";
import { AddPlaceToFavouriteRepository } from "@application/interfaces/repositories/users/AddPlaceToFavouriteRepository";
import { GetFavouritePlacesByIdRepository } from "@application/interfaces/repositories/users/GetFavouritePlacesByIdRepository";

export class NormalUserRepository implements
    CreateNormalUserRepository, LoadNormalUserByEmailRepository,
    LoadNormalUserByIdRepository, UpdateNormalUserPasswordRepository,
    AddPlaceToFavouriteRepository, GetFavouritePlacesByIdRepository {

    async getFavouritePlacesById(id: string): Promise<GetFavouritePlacesByIdRepository.Response> {
        if (!isValidObjectId(id)) {
            return null;
        }
        const rawFavouritePlaces = await normalUserModel.findById(id, { favouritePlaces: 1 });


        // const rawFavouritePlaces = await normalUserModel.findById(id, { favouritePlaces: 1, _id: 0 });
        // const rawFavouritePlaces = await normalUserModel.findById(id).select('favouritePlaces');
        // const rawFavouritePlaces = await normalUserModel.findOne({ _id: stringToObjectId(id) }, { favouritePlaces: 1 });
        // console.log(rawFavouritePlaces)
        return rawFavouritePlaces && mapDocument(rawFavouritePlaces);
    }


    async addPlaceToFavourite(params: AddPlaceToFavouriteRepository.Request): Promise<void> {
        const { placeId, userId } = params;
        await normalUserModel.findByIdAndUpdate(
            stringToObjectId(userId),
            { $push: { favouritePlaces: placeId } }
        )
    }



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