import mongoose from "mongoose";

class DbConection {
    private url?: string;

    async connect(url: string): Promise<void> {

        try {
            await mongoose.connect(url);
            console.log("Connected to MongoDB  🚀 at ", url);
        } catch (error) {
            throw error;
        }
    }
}

export default new DbConection();