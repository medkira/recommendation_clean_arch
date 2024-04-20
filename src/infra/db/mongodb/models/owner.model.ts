import mongoose from "mongoose";

const { Schema } = mongoose;

const ownerSchema = new Schema({
  name: {
    type: String,
    required: false,
  },
  username: {
    type: String,
    required: false,
  },
  image: {
    type: Array,
  },
  email: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: false,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
    required: false,
  },
  isEmailVerified: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
    required: false,
  },
  places: {
    type: Number,
  },
});

const ownerModel = mongoose.model("owner", ownerSchema);

export default ownerModel;
