import mongoose from "mongoose";
import { gender } from "../const/gender";
import { Place } from "@domain/entities/Place";

const { Schema } = mongoose;

const normalUserSchema = new Schema({
  Firstname: {
    type: String,
    trim: true,
  },
  Lastname: {
    type: String,
    trim: true,
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
    required: true,
  },
  jobTitle: {
    type: String,
    required: false,
    trim: true,
    lowercase: true,
  },
  address: {
    type: String,
    required: false,
    trim: true,
  },

  profileImage: {
    type: String,
    required: false,
  },

  mobileNumber: {
    type: String,
    required: false,
  },
  age: {
    type: Number,
    require: false,
  },
  gender: {
    type: String,
    enum: [gender.Male, gender.female],
  },
  salary: {
    type: String,
    required: false,
  },
  parent: {
    type: Boolean,
    require: false,
  },
  socialStatus: {
    type: String,
    required: false,
  },
  isEmailVerified: {
    type: Boolean,
    default: false,
  },

});

const normalUserModel = mongoose.model("normalUser", normalUserSchema);

export default normalUserModel;
