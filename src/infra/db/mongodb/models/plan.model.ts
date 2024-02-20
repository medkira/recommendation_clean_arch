import mongoose from "mongoose";

const { Schema } = mongoose;

const planSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  places: {
    type: Number,
  },
  totalCost: {
    type: Number,
    required: true,
  },
  totalTime: {
    type: Number,
    required: true,
  },
});

const planModel = mongoose.model("Chats", planSchema);

export default planModel;
