import normalUserModel from "../models/normalUser.model";
import { isValidObjectId, mapCollection, mapDocument, objectIdToString, stringToObjectId } from "../helpers/mappers";
import { CreateNormalUserRepository } from "@application/interfaces/repositories/normalUser/CreateNoramlUserRepository";
import { LoadNormalUserByEmailRepository } from "@application/interfaces/repositories/normalUser/LoadNormalUserByEmailRepository";
import { LoadOwnerByIdlRepository } from "@application/interfaces/repositories/owner/LoadOwnerByIdRepository";
import { UpdateNormalUserPasswordRepository } from "@application/interfaces/repositories/normalUser/updateNormalUserPasswordRepository";
import { LoadNormalUserByIdRepository } from "@application/interfaces/repositories/normalUser/LoadNormalUserByIdRepository";
import { AddPlaceToFavouriteRepository } from "@application/interfaces/repositories/users/AddPlaceToFavouriteRepository";
import { GetFavouritePlacesByIdRepository } from "@application/interfaces/repositories/users/GetFavouritePlacesByIdRepository";
import { RemovePlaceFromFavouriteRepository } from "@application/interfaces/repositories/users/RemovePlaceFromFavouriteRepository";
import { GetUsersRepository } from "@application/interfaces/repositories/users/GetUsersRepository";
import { paginateModel } from "../helpers/utils/pagination-util";
import { DeleteUserRepository } from "@application/interfaces/repositories/users/DeletUserRepository";
import { UpdateUserRoleByIdRepository } from "@application/interfaces/repositories/normalUser/UpdateUserRoleByIdRepository";
import { UpdateUserInformationByIdRepository } from "@application/interfaces/repositories/users/UpdateUserInformationByIdRepository";
import { NormalUser } from "@domain/entities/NormalUser";
import { VerfifyUserEmailByIdRepository } from "@application/interfaces/repositories/users/VerifyUserEmailRepository";

export class NormalUserRepository implements
    CreateNormalUserRepository, LoadNormalUserByEmailRepository,
    LoadNormalUserByIdRepository, UpdateNormalUserPasswordRepository,
    AddPlaceToFavouriteRepository, GetFavouritePlacesByIdRepository,
    RemovePlaceFromFavouriteRepository, GetUsersRepository,
    DeleteUserRepository, UpdateUserRoleByIdRepository,
    UpdateUserInformationByIdRepository, VerfifyUserEmailByIdRepository {

    async verfifyUserEmailById(id: VerfifyUserEmailByIdRepository.Request): Promise<void> {
        await normalUserModel.findByIdAndUpdate(
            stringToObjectId(id),
            { isEmailVerified: true }
        )
    }

    async UpdateUserInformation(params: UpdateUserInformationByIdRepository.Request): Promise<NormalUser> {
        const { UserData, userId } = params;

        const rawUpdateUser = await normalUserModel.findOneAndUpdate(
            stringToObjectId(userId),
            { ...UserData, updatedAt: new Date() },
            {
                new: true,
            }
        );
        return rawUpdateUser && mapDocument(rawUpdateUser);

    }

    async updateUserRole(params: UpdateUserRoleByIdRepository.Request): Promise<void> {
        const { id, role } = params;

        await normalUserModel.findByIdAndUpdate(
            stringToObjectId(id),
            { role }

        )
    }

    async deletUser(userId: string): Promise<void> {
        await normalUserModel.findOneAndDelete(stringToObjectId(userId))
    }

    async getUsers(params: GetUsersRepository.Request): Promise<GetUsersRepository.Response> {
        const rawData = await paginateModel(normalUserModel, params.page, params.paginationLimit, params.query);
        const transformedData = mapCollection(rawData.data);
        return {
            data: transformedData,
            page: rawData.page,
            total: rawData.total,
            totalPages: rawData.totalPages
        };
    }


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

    async removePlaceFromFavourite(params: RemovePlaceFromFavouriteRepository.Request): Promise<void> {
        const { placeId, userId } = params;
        await normalUserModel.findByIdAndUpdate(
            stringToObjectId(userId),
            { $pull: { favouritePlaces: placeId } }
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