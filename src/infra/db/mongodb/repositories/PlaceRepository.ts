import { CreatePlaceRepository } from "@application/interfaces/repositories/place/CreatePlaceRepository";
import { DeletePlaceRepository } from "@application/interfaces/repositories/place/DeletePlaceRepository";
import { GetPlaceByIdRepository } from "@application/interfaces/repositories/place/GetPlaceByIdRepository";
import { UpdatePlaceRepository } from "@application/interfaces/repositories/place/UpdatePlaceRepository";
import { GetPlaceByTypeRepository } from "@application/interfaces/repositories/place/GetPlaceByTypeRepository";
import { Place, PlaceProps, placeTypes } from "@domain/entities/Place";
import placeModel from "../models/place.model";
import {
  mapDocument,
  objectIdToString,
  stringToObjectId,
} from "../helpers/mappers";
import { isValidObjectId } from "mongoose";

export class PlaceRepository
  implements
  CreatePlaceRepository,
  GetPlaceByIdRepository,
  UpdatePlaceRepository,
  GetPlaceByTypeRepository,
  DeletePlaceRepository {

  async getPlaceByType(
    placeType: GetPlaceByTypeRepository.Request
  ): Promise<GetPlaceByTypeRepository.Response> {
    console.log(placeType);
    const rawplace = await placeModel.findOne(placeType);
    return rawplace && mapDocument(rawplace);
  }

  async createPlace(
    placeData: CreatePlaceRepository.Request
  ): Promise<CreatePlaceRepository.Response> {
    const place = new placeModel({
      ...placeData,
    });
    const savedPlace = await place.save();
    const placeId = objectIdToString(savedPlace._id);
    return { id: placeId };
  }

  async getPlaceById(
    placeId: GetPlaceByIdRepository.Request
  ): Promise<GetPlaceByIdRepository.Response> {
    if (!isValidObjectId(placeId)) {
      return null;
    }
    const rawplace = await placeModel.findById(placeId);
    return rawplace && mapDocument(rawplace);
  }

  async updatePlace(params: UpdatePlaceRepository.Request): Promise<Place> {
    let { placeId, placeData } = params;
    const rawUpdatedPlace = await placeModel.findByIdAndUpdate(
      stringToObjectId(placeId),
      { ...placeData },
      { new: true }
    );
    return rawUpdatedPlace && mapDocument(rawUpdatedPlace);
  }

  async deletePlace(placeId: DeletePlaceRepository.Request): Promise<void> {
    await placeModel.findOneAndDelete(stringToObjectId(placeId));
  }
}
