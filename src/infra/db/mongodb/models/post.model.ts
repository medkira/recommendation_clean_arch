import mongoose from "mongoose";
import { placeTypes } from "../const/placeTypes";
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
    type: Array,
  },
  userId: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    require: false,
  },
  url: {
    type: String,
    required: false,
  },
  totalComments: {
    type: Number,
    default: 0,
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
