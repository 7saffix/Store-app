import Product from "../Models/productModel.js"

export const createProduct = async(req,res)=>{
    const product = req.body
    if(!product.name || !product.price || !product.image){
       return res.status(400).json({success:false,message:'provide all field'})
    }

    // const newProduct = new Product 
    try {
        await Product.create(product)
        res.status(201).json({success:true,data:product})
    } catch (error) {
        console.log('Error in createProduct section',error.message.toString());
        res.status(500).json({success:false,message:'server error'});
    }
}