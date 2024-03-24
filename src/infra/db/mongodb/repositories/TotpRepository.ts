import { CreateTotpRepository } from "@application/interfaces/repositories/totp/CreateTotpRepository";
import { GetTotpByUserIdRepository } from "@application/interfaces/repositories/totp/GetTotpByUserIdRepository";
import totpModel from "../models/totp.model";
import { mapDocument, objectIdToString } from "../helpers/mappers";
import { DeleteTotpByUserIdInterface } from "@application/interfaces/use-cases/totp/DeleteTotpByUserIdInterface";
import { DeleteTotpByUserIdRepository } from "@application/interfaces/repositories/totp/DeleteTotpByUserIdRepository";

export class TotpRepository implements CreateTotpRepository, GetTotpByUserIdRepository, DeleteTotpByUserIdRepository {

    async deleteTotp(id: string): Promise<void> {
        await totpModel.findOneAndDelete({ userId: id });
    }

    async createTotp(totpData: CreateTotpRepository.Request): Promise<CreateTotpRepository.Response> {
        const userTotp = new totpModel({
            ...totpData,
            createdAt: new Date,
        });

        const savedTotp = await userTotp.save();

        const totpId = objectIdToString(savedTotp._id);
        return { id: totpId };
    }

    async getTotpByUserId(id: string): Promise<GetTotpByUserIdRepository.Response> {
        const rawUserTotp = await totpModel.findOne({ userId: id }).sort({ createdAt: -1 });

        return rawUserTotp && mapDocument(rawUserTotp);
    }



}