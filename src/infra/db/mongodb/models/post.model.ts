import mongoose from "mongoose";
import { placeType } from "../const/placeType";
const { Schema } = mongoose;

const postSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  postImage: {
    type: String,
    required: true,
  },
  author_id: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: {
      values: [
        placeType.adventure,
        placeType.cafe,
        placeType.cafeRestaurant,
        placeType.hotel,
        placeType.restaurant,
      ],
    },
    default: placeType.restaurant,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
});

const postModel = mongoose.model("post", postSchema);

export default postModel;
