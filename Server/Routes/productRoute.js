import express from "express";
import { createProduct } from "../Controllers/productController.js";
const router = express.Router()

router.post('/',createProduct); //product created

export default router