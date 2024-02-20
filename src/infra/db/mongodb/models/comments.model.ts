import mongoose from "mongoose";

const { Schema } = mongoose;

const commentShema = new Schema({
  author_id: {
    type: String,
    required: true,
  },
  post_id: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
});

const CommentModel = mongoose.model("comment", commentShema);

export default CommentModel;
