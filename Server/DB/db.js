import mongoose from "mongoose";

const connectDB = async()=>{
   try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log(`mongoDB Connection successful`);
   } catch (error) {
    console.log(`mongoDB connection failed`,error.message.toString());
    process.exit(1)
   }
}

export default connectDB