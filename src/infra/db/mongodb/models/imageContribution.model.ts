import mongoose from "mongoose";

const { Schema } = mongoose;

const imageContributionSchema = new Schema({

    user_id: {
        type: String,
        required: true,
    },
    user_name: {
        type: String,
        required: true,
    },
    image: {
        type: Array,
        required: true,
        of: String,
    },
    place_id: {
        type: String,
        required: false,
    },
    place_name: {
        type: String,
    },
    is_verified: {
        type: Boolean,
        required: true,
        default: false,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

const ImageContributionModel = mongoose.model("ImageContribution", imageContributionSchema);

export default ImageContributionModel;
