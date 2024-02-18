import mongoose from "mongoose";
import { authorizationRoles } from "../const/auth";
import { gender } from "../const/gender";

const { Schema } = mongoose;

const userSchema = new Schema({
  Firstname: {
    type: String,
    trim: true,
    minLength: [3, "Name can't be smaller than 3 characters"],
    maxLength: [15, "Name can't be greater than 15 characters"],
  },
  Lastname: {
    type: String,
    trim: true,
    minLength: [3, "Surname can't be smaller than 3 characters"],
    maxLength: [15, "Surname can't be greater than 15 characters"],
  },

  email: {
    type: String,
    required: [true, "Please provide email"],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minlength: [6, "Password must be more than 6 characters"],
    trim: true,
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
    trim: true,
    lowercase: true,
    enum: [authorizationRoles.user, authorizationRoles.owner],
    default: authorizationRoles.user,
  },
  jobTitle: {
    type: String,
    required: false,
    trim: true,
    lowercase: true,
    minlength: [2, "Job Title can't be smaller than 3 characters"],
    maxLength: [30, "Job Title can't be greater than 15 characters"],
  },
  address: {
    type: String,
    required: false,
    trim: true,
    lowercase: true,
  },

  profileImage: {
    type: String,
    required: true,
  },

  mobileNumber: {
    type: String,
    required: false,
    maxLength: [8, "mobileNumber can't be greater than 8 characters"],
    trim: true,
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
});
