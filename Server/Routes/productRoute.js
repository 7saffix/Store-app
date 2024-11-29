import express from "express";
import { createProduct, deleteProduct } from "../Controllers/productController.js";
const router = express.Router()

router.post('/',createProduct); //product created
router.delete('/:id',deleteProduct); //product created

export default router