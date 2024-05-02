import mongoose from "mongoose";

const { Schema } = mongoose;

const rateSchema = new Schema({

    rate: {
        type: Number,
        required: true,
    },
    user_id: {
        type: String,
        required: true,
    },
    user_name: {
        type: String,
    },
    rated_id: {
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
    rated_name: {
        type: String,
        required: true,
    },
    // topCount: {
    //     type: Number,
    // },
    review: {
        type: String,
    },
});


const RateModel = mongoose.model("Rate", rateSchema);

export default RateModel;
