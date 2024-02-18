import mongoose from "mongoose";

const { Schema } = mongoose;

const chatBotSchema = new Schema({
  id: {
    type: String,
  },
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  client_id: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: "user",
  },
});

const chatBotModel = mongoose.model("Chats", chatBotSchema);

export default chatBotModel;
