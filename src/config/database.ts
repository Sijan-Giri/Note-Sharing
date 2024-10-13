import mongoose from "mongoose"
import envConfig from "./config"


const connectToDatabase = async() => {
    try {
        await mongoose.connect(envConfig.mongodbString as string);
        console.log("Database connected successfully")
    } catch (error) {
        console.log("Database connection failed",error);
    }
}

export default connectToDatabase