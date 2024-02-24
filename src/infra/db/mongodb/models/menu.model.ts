import mongoose from "mongoose";

const { Schema } = mongoose;

const menuSchema = new Schema({
  foods_id: {
    type: [String],
    required: true,
  },
  place_id: {
    type: String,
    required: true,
  },
  menuImage: {
    type: String,
  },
});

const menuModel = mongoose.model("menu", menuSchema);

export default menuModel;
