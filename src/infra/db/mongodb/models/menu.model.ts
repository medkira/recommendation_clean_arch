import mongoose from "mongoose";

const { Schema } = mongoose;

const menuSchema = new Schema({
  food_ids: {
    type: Array,
  },
  place_id: {
    type: String,
    required: true,
  },
  menuImage: {
    type: Array
  },
});

const menuModel = mongoose.model("menu", menuSchema);

export default menuModel;
