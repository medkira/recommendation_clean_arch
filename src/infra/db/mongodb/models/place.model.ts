import mongoose from "mongoose";
import { placeTypes } from "../const/placeTypes";
import { PlaceProps } from "@domain/entities/Place";

const { Schema } = mongoose;

const placeSchema = new Schema({

  type: {
    type: String,
    required: false,
    // enum: [
    //   placeTypes.cafe,
    //   placeTypes.cafeRestaurant,
    //   placeTypes.restaurant,
    //   placeTypes.adventure,
    //   placeTypes.hotel,
    // ],
    default: placeTypes.restaurant,
  },

  name: {
    type: String,
    required: false,
  },
  user_id: {
    type: String,
    required: false,
  },

  location: {
    type: String,
    required: false,
  },

  description: {
    type: String,
    required: false,
  },

  url: {
    type: String,
    required: false,
  },
  placeImage: {
    type: Array
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
  is_verified: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const placeModel = mongoose.model("place", placeSchema);

export default placeModel;
