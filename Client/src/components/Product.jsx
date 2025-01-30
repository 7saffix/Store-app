// import React from 'react';
import { BiEdit } from "react-icons/bi";
import { MdDeleteSweep } from "react-icons/md";
import { useProductState } from "../store/productStore";
import toast from 'react-hot-toast';
import { useState } from "react";

const Product = ({product}) => {
    const [updatedProduct,setUpdatedProduct] = useState(product)
    const [isModalOpen, setIsModalOpen] = useState(false);

    // delete product 
    const {deleteProduct}=useProductState()
    const handleDelete=async(id)=>{
      const {success,message} = await deleteProduct(id)
      if(!success){
        toast.error(message);
      }else{
        toast.success(message);
      }
 
    }
    //update product
    const {editProduct} = useProductState()
    const handleUpdate =async (id,updatedProduct)=>{
        const {success,message}= await editProduct(id,updatedProduct)
        if(!success){
            toast.error(message);
          }else{
            toast.success(message);
          }
        setIsModalOpen(false)
    }

    const handleCancel = () => {
        setIsModalOpen(false); // Close the modal
        setUpdatedProduct(product); // Reset the form to the original product
      };

    return (
        <div className="card bg-base-100 shadow-md rounded-md">
            <figure>
                <img
                className=" h-48 w-full object-cover"
                src={product.image}
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title uppercase">
                {product.name}
                <div className="badge badge-outline">NEW</div>
                </h2>
                <p className="font-semibold">{product.price}$</p>
                <div className="card-actions justify-start font-medium text-2xl gap-3">
                <div className="bg-black p-1 rounded-md text-white"
                onClick={() => setIsModalOpen(true)}
                ><BiEdit /></div>
                <div className="bg-black p-1 rounded-md text-white"
                onClick={()=>handleDelete(product._id)}
                ><MdDeleteSweep /></div>
                </div>
            </div>

            {/* modal */}
            <div className={`modal ${isModalOpen ? "modal-open" : ""}`}>
                <div className="modal-box">
                    <h3 className="font-bold text-xl my-3 text-center">Update product✒</h3>
                    <form action="" className="flex flex-col gap-3">
                        <input type="text" placeholder="product name" className="outline outline-2 p-3 rounded-md"
                        name="name"
                        value={updatedProduct.name}
                        onChange={(e)=>setUpdatedProduct({...updatedProduct,name:e.target.value})}
                        />
                        <input type="text" placeholder="price" className="outline outline-2 p-3 rounded-md"
                        name="price"
                        value={updatedProduct.price}
                        onChange={(e)=>setUpdatedProduct({...updatedProduct,price:e.target.value})}
                        />
                        <input type="text" placeholder="image url" className="outline outline-2 p-3 rounded-md"
                        name="image"
                        value={updatedProduct.image}
                        onChange={(e)=>setUpdatedProduct({...updatedProduct,image:e.target.value})}
                        />
                    </form>
                    <div className="modal-action">
                   
                        <button className="btn btn-outline mx-1" onClick={handleCancel}>Cancel</button>
                        <button className="btn btn-neutral" onClick={()=>handleUpdate(product._id,updatedProduct)}>update</button>
                   
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;