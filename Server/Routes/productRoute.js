import express from "express";
import { createProduct, deleteProduct, readProduct, updateProduct } from "../Controllers/productController.js";
const router = express.Router()

router.post('/',createProduct); //product created
router.get('/',readProduct); //product read
router.put('/:id',updateProduct); //product updated
router.delete('/:id',deleteProduct); //product deleted

export default router