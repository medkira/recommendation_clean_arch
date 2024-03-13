import mongoose from "mongoose";

const { Schema } = mongoose;

const ownerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  image: {
    type: Array
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
  isEmailVerified: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
    required: true,
  },
  places: {
    type: Number,
  },
});

const ownerModel = mongoose.model("owner", ownerSchema);

export default ownerModel;
