import mongoose from "mongoose";

const { Schema } = mongoose;

const commentShema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  postId: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: false,
  },
  likes: {
    type: Number,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
  username: {
    type: String,
    required: true,
  }
});

const CommentModel = mongoose.model("comment", commentShema);

export default CommentModel;
