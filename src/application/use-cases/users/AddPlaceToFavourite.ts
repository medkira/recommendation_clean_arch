import { CreateRateRepository } from "@application/interfaces/repositories/rates/CreateRateRepository";
import { AddPlaceToFavouriteRepository } from "@application/interfaces/repositories/users/AddPlaceToFavouriteRepository";
import { CreateRateInterface } from "@application/interfaces/use-cases/rates/CreateRateInterface";
import { AddPlaceToFavouriteInterface } from "@application/interfaces/use-cases/users/AddPlaceToFavouriteInterface";
import { UploadImage } from "@application/interfaces/utils/upload/UploadImage";
import { File } from "@domain/entities/File";

export class AddPlaceToFavourite implements AddPlaceToFavouriteInterface {
    constructor(
        private readonly addPlaceToFavouriteRepository: AddPlaceToFavouriteRepository,

    ) { }
    async execute(params: AddPlaceToFavouriteInterface.Request): Promise<AddPlaceToFavouriteInterface.Response> {
        await this.addPlaceToFavouriteRepository.addPlaceToFavourite(params);

    }

}
