// import React from 'react';

import { Link } from "react-router-dom";
import { useProductState } from "../store/productStore";
import { useEffect } from "react";
import Product from "../components/Product";

const HomePage = () => {
    const {getProducts,products} = useProductState()

    useEffect(()=>{
        getProducts()
    },[getProducts]);

    return (
        <div>
            <div>
                <h1 className="font-bold text-3xl text-center my-3">Available products</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    products.map((product)=>(
                        <Product key={product._id} product={product} />
                    ))
                } 
               </div>    
            </div>


           {products.length==0 && (
            <div className="text-center sm:flex justify-center gap-1 font-semibold text-xl mt-10">
              <p>❗No product available 🎁</p>
              <Link to={'/create'} className="text-green-400 hover:underline">Create a product</Link>
           </div>
           )}

        </div>
    );
};

export default HomePage;