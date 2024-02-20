import mongoose from "mongoose";
import { placeType } from "../const/placeType";

const { Schema } = mongoose;

const placeSchema = new Schema({
  type: {
    type: String,
    required: true,
    enum: [placeType.cafe, placeType.cafeRestaurant, placeType.restaurant],
    default: placeType.restaurant,
  },

  name: {
    type: String,
    required: true,
  },

  rate: {
    type: Number,
    required: true,
  },

  location: {
    type: String,
    required: true,
  },

  Menu: {
    type: String,
    required: true,
  },

  foods: {
    type: mongoose.Schema.ObjectId,
    ref: "food",
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  url: {
    type: String,
    required: true,
  },
});

const placeModel = mongoose.model("place", placeSchema);

export default placeModel;
