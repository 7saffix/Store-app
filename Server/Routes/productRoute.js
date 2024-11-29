import express from "express";
import { createProduct, deleteProduct, updateProduct } from "../Controllers/productController.js";
const router = express.Router()

router.post('/',createProduct); //product created
router.put('/:id',updateProduct); //product updated
router.delete('/:id',deleteProduct); //product deleted

export default router