import express from "express";
import dotenv from "dotenv"
import connectDB from "./DB/db.js";

dotenv.config()

const app = express()
const PORT = process.env.PORT

app.listen(PORT,()=>{
    connectDB()
    console.log(`server is running at : ${PORT}`);
})