import express from "express";
import dotenv from "dotenv"
import connectDB from "./DB/db.js";
import productRouter from "./Routes/productRoute.js";

dotenv.config()

const app = express()
app.use(express.json())

const PORT = process.env.PORT

app.use('/api/products',productRouter)

app.listen(PORT,()=>{
    connectDB()
    console.log(`server is running at : ${PORT}`);
})