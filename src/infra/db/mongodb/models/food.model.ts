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
  place_id: {
    type: String,
    required: true,
  },
  menu_id: {
    type: String,
    required: false,
  },
  foodImage: {
    type: Array
  },
});

const foodModel = mongoose.model("food", foodSchema);

export default foodModel;
