// import React from 'react';
import { useState } from "react";
import { useProductState } from "../store/productStore";
import toast from 'react-hot-toast';

const CreatePage = () => {
    const [newProduct,setNewProduct] = useState({
        name:"",
        price:"",
        image:""
    })

    const {createProduct} = useProductState()

    const handleProduct =async (e) =>{
        e.preventDefault()
        const {success,message} = await createProduct(newProduct)
        // console.log(success,message);

        if(!success){
            toast.error(message);
        }else{
            toast.success(message);
        }
        
        setNewProduct({name:"",price:"",image:""})
    }


    return (     
          <div>
            <h1 className="font-bold text-2xl text-center my-3">Create New Product</h1>

            <div className="w-10/12 lg:w-1/2 mx-auto">
                <form action="" className="flex flex-col gap-3 ">
                    <input type="text" placeholder="product name" className="outline outline-2 p-3 rounded-md"
                    name='name'
                    value={newProduct.name}
                    onChange={(e)=>setNewProduct({...newProduct,name:e.target.value})} 
                    />

                    <input type="text" placeholder="Price" className="outline outline-2 p-3 rounded-md placeholder:font-semibold "
                    name='price'
                    value={newProduct.price}
                    onChange={(e)=>setNewProduct({...newProduct,price:e.target.value})}
                    />

                    <input type="text" placeholder="image url" className="outline outline-2 p-3 rounded-md placeholder:font-semibold"
                    name='image'
                    value={newProduct.image}
                    onChange={(e)=>setNewProduct({...newProduct,image:e.target.value})}
                    />

                    <button type="submit" className="btn btn-neutral"
                    onClick={handleProduct}
                    >Add product</button>
                </form>
            </div>
          </div>
    )
};

export default CreatePage;