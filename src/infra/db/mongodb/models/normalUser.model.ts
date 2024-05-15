import mongoose from "mongoose";
import { gender } from "../const/gender";
import { Place } from "@domain/entities/Place";

const { Schema } = mongoose;

const normalUserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    trim: true,
    default: "",
  },
  lastName: {
    type: String,
    trim: true,
    default: "",
  },
  favouritePlaces: {
    type: Array<Place>
  },
  email: {
    type: String,

    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  updatedAt: {
    type: Date,
    default: Date.now,
  },
  role: {
    type: String,
    required: false,
    default: "",
  },
  jobTitle: {
    type: String,
    required: false,
    trim: true,
    lowercase: true,
    default: "",
  },
  address: {
    type: String,
    required: false,
    // trim: true,
    default: "",
  },

  profileImage: {
    type: String,
    required: false,
    default: "",
  },

  phoneNumber: {
    type: String,
    required: false,
  },
  age: {
    type: String,
    require: false,
    default: "",
  },
  gender: {
    type: String,
    // enum: [gender.Male, gender.female],
    default: "",
  },
  salary: {
    type: String,
    required: false,
    default: "",
  },
  parent: {
    type: Boolean,
    require: false,
    default: "",
  },
  socialStatus: {
    type: String,
    required: false,
    default: "",
  },
  isEmailVerified: {
    type: Boolean,
    default: false,
  },
  country: {
    type: String,
    default: "",
  }

});

const normalUserModel = mongoose.model("normalUser", normalUserSchema);

export default normalUserModel;
