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
import { AddImageToPlaceByIdRepository } from "@application/interfaces/repositories/place/AddImageToPlaceRepository";
import { ValidateAddImageContributionRepository } from "@application/interfaces/repositories/imageContribution/ValidateAddImageContributionRepository";
import { ValidationPlaceContributionByIdRepository } from "@application/interfaces/repositories/place/ValidationPlaceContributionByIdIRepository";
import { query } from "express";
import path from "path";
import { AutoCompletePlaceSearchRepository } from "@application/interfaces/repositories/place/AutoCompletePlaceSearchRepository";
export class PlaceRepository
  implements
  CreatePlaceRepository,
  GetPlaceByIdRepository,
  UpdatePlaceRepository,
  GetPlaceByTypeRepository,
  DeletePlaceRepository,
  GetLatestPlacesRepository,
  AddImageToPlaceByIdRepository,
  ValidationPlaceContributionByIdRepository,
  AutoCompletePlaceSearchRepository {
  async autoCompletePlaceSearch(params: AutoCompletePlaceSearchRepository.Request): Promise<AutoCompletePlaceSearchRepository.Response> {
    const rawData = await placeModel.aggregate([
      {
        $search: {
          index: "autocomplete",
          compound: {
            should: [
              {
                autocomplete: {
                  query: params.query,
                  path: "name",
                  fuzzy: {
                    maxEdits: 2
                  },
                  tokenOrder: "sequential"
                }
              },
              {
                autocomplete: {
                  query: params.query,
                  path: "type",
                  fuzzy: {
                    maxEdits: 2
                  },
                  tokenOrder: "sequential"
                }
              }
            ]
          }
        }
      },
      {
        $project: {
          name: 1,
          type: 1,
          placeImage: 1,
          _id: 1,
        }
      },
      {
        $limit: 10
      }
    ]);
    const transformedData = rawData.map((document) => {
      const { _id: objectId, ...rest } = document;
      const id = objectIdToString(objectId);
      return { id, ...rest };

    })
    // const transformedData = mapCollection(rawData);

    return transformedData;
  }

  async validationPlaceContributionById(id: string): Promise<void> {
    await placeModel.findByIdAndUpdate(
      stringToObjectId(id),
      { is_verified: true }
    )
  }




  async addImageToPlace(params: AddImageToPlaceByIdRepository.Request): Promise<void> {
    const { imageUrl, placeId } = params;

    await placeModel.findByIdAndUpdate(
      stringToObjectId(placeId),
      { $push: { placeImage: imageUrl } }
    )
  }

  async getLatestPlaces(params: GetLatestPlacesRepository.Request): Promise<GetLatestPlacesRepository.Response> {
    const rawLatestPlaces = await paginateModel(placeModel, params.page, params.paginationLimit, params.query);
    const transformedData = mapCollection(rawLatestPlaces.data);
    return {
      data: transformedData,
      page: rawLatestPlaces.page,
      total: rawLatestPlaces.total,
      totalPages: rawLatestPlaces.totalPages
    };

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
      createdAt: new Date(),
    });
    const savedPlace = await place.save();
    const placeId = objectIdToString(savedPlace._id);
    return placeId;
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
