import { CreatePlaceRepository } from "@application/interfaces/repositories/place/CreatePlaceRepository";
import { DeletePlaceRepository } from "@application/interfaces/repositories/place/DeletePlaceRepository";
import { GetPlaceByIdRepository } from "@application/interfaces/repositories/place/GetPlaceByIdRepository";
import { UpdatePlaceRepository } from "@application/interfaces/repositories/place/UpdatePlaceRepository";
import { GetPlaceByTypeRepository } from "@application/interfaces/repositories/place/GetPlaceByTypeRepository";
import placeModel from "../models/place.model";
import {
  mapCollection,
  mapDocument,
  objectIdToString,
  stringToObjectId,
} from "../helpers/mappers";
import { isValidObjectId } from "mongoose";
import { GetLatestPlacesRepository } from "@application/interfaces/repositories/place/GetLatestPlacesRepository";
import { paginateModel } from "../helpers/utils/pagination-util";

import { Document } from 'mongoose';
import { Place } from "@domain/entities/Place";
export class PlaceRepository
  implements
  CreatePlaceRepository,
  GetPlaceByIdRepository,
  UpdatePlaceRepository,
  GetPlaceByTypeRepository,
  DeletePlaceRepository,
  GetLatestPlacesRepository {

  async getLatestPlaces(params: GetLatestPlacesRepository.Request): Promise<GetLatestPlacesRepository.Response> {


    return paginateModel(placeModel, params.page, params.paginationLimit, params.query);



    // const { page, paginationLimit } = params;
    // const offset = (page - 1) * paginationLimit;
    // const rawPlaces = await placeModel
    //   .find({})
    //   .sort({ createdAt: -1 })
    //   .skip(offset)
    //   .limit(paginationLimit)
    //   .exec()
    // const places = mapCollection(rawPlaces);
    // const total = await placeModel.countDocuments({});
    // const totalPages = Math.ceil(total / paginationLimit);
    // return {
    //   data: places, page, total, totalPages,
    // };
  }



  async getPlaceByType(
    placeType: GetPlaceByTypeRepository.Request
  ): Promise<GetPlaceByTypeRepository.Response> {
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
