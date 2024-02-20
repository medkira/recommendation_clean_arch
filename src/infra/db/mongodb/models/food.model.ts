import mongoose from "mongoose";

const { Schema } = mongoose;

const foodSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
  place_id: {
    type: String,
    required: true,
  },
});

const foodModel = mongoose.model("food", foodSchema);

export default foodModel;
