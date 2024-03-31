import mongoose from "mongoose";

const { Schema } = mongoose;

const googleUserSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  family_name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    required: true,

    unique: true,
    trim: true,
  },
  role: {
    type: String,
    required: false,
    default: "",
  },
  email_verified: {
    type: Boolean,
    default: false,
  },

  picture: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

  updatedAt: {
    type: Date,
    default: Date.now,
  },
});
const googleUserModel = mongoose.model("googleUser", googleUserSchema);

export default googleUserModel;
