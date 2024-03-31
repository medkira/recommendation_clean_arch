import mongoose from "mongoose";

const { Schema } = mongoose;

const chatBotSchema = new Schema({
  client_id: {
    type: String,
    required: true,
  },
  conversationsHistory: {
    type: Number,
    default: 0,
  },
  suggestedPlans: {
    type: Number,
    default: 0,
  },
});

const chatBotModel = mongoose.model("Chatbot", chatBotSchema);

export default chatBotModel;
