import mongoose from "mongoose";

const { Schema } = mongoose;

const adminSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
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
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  // Add any other admin-specific properties here
});

const adminModel = mongoose.model("Admin", adminSchema);

export default adminModel;
