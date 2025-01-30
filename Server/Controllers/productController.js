import mongoose from "mongoose"
import Product from "../Models/productModel.js"

export const createProduct = async(req,res)=>{
    const product = req.body
    if(!product.name || !product.price || !product.image){
       return res.status(400).json({success:false,message:'provide all field'})
    }
    try {
        await Product.create(product)
        res.status(201).json({success:true,data:product})
    } catch (error) {
        console.log('Error in createProduct section',error.message.toString());
        res.status(500).json({success:false,message:'server error'});
    }
}

export const readProduct = async(req,res)=>{
    try {
       const data = await Product.find({}) 
       res.status(200).json({success:true,data:data})
    } catch (error) {
        console.log('Error in getProduct section',error.message.toString());
        res.status(500).json({success:false,message:'server error'});
    }
}

export const updateProduct = async(req,res)=>{
    const {id}=req.params
    const updatedData = req.body
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false,message:'product not found'})
    }
    try {
        await Product.findByIdAndUpdate(id,updatedData,{new:true})
        res.status(201).json({success:true,data:updatedData,message:'product updated'})
    } catch (error) {
        console.log('Error in update product section',error.message.toString());
        return res.status(500).json({success:false,message:'server error'})
    }
}

export const deleteProduct = async(req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false,message:'product not found'})
    }
    try {
        await Product.findByIdAndDelete(id)
        res.status(200).json({success:true,message:'product deleted successfully'})
    } catch (error) {
        console.log('Error in delete product section',error.message.toString());
        return res.status(500).json({success:false,message:'server error'})
    }
}