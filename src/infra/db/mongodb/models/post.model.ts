import mongoose from "mongoose";
import { placeTypes } from "../const/placeTypes";
const { Schema } = mongoose;

const postSchema = new Schema({
  title: {
    type: String,
    trim: false,
    required: false,
  },
  content: {
    type: String,
    required: false,
  },
  postImage: {
    type: Array,
  },
  userId: {
    type: String,
    required: false,
  },
  user_name: {
    type: String,

  },
  likes: {
    type: Number,
    required: false,
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
  rate: {
    type: Number,
    required: true,
  },
  post_type: {
    type: String,

  }
});

const postModel = mongoose.model("post", postSchema);

export default postModel;
