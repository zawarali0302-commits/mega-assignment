import mongoose from 'mongoose';

const Mongo_URI = process.env.MONGO_URI || "mongodb://localhost:27017/mega_assignment"

const connectDB = async () => {
    try {
        await mongoose.connect(Mongo_URI);
        console.log("MongoDB connected successfully.");
    } catch (error) {
        console.error("MongoDB connection error", error);
        process.exit(1);
    }
}


const disconnectDB = async () => {
    try {
        await mongoose.disconnect();
        console.log("MongoDB disconnected successfully.")
    } catch (error) {
        console.error("MongoDB disconnection error", error)
    }
}

export {connectDB, disconnectDB}