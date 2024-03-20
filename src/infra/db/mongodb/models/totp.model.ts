import { Totp } from "@domain/entities/totp";
import mongoose from "mongoose";

const { Schema } = mongoose;

const totpSchema = new Schema<Totp>({
    userId: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    expiresAt: {
        type: Date,
    },

});

const totpModel = mongoose.model("totp", totpSchema);

export default totpModel;