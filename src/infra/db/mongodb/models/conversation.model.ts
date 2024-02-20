import mongoose from "mongoose";

const { Schema } = mongoose;

const conversationSchema = new Schema({
  user_id: {
    type: String,
    required: true,
  },
  chatbot_id: {
    type: String,
    required: true,
  },
  user_message: {
    type: String,
    required: true,
  },
  bot_message: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const conversationModel = mongoose.model("conversation", conversationSchema);

export default conversationModel;
