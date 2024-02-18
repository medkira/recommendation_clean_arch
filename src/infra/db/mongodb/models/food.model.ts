import mongoose from "mongoose";

const { Schema } = mongoose;

const foodSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
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
  foodId: {
    type: Number,
    required: true,
  },
  belongsTo: {
    type: mongoose.Schema.ObjectId,
    ref: "Place",
    required: true,
  },
});

const foodModel = mongoose.model("food", foodSchema);

export default foodModel;
