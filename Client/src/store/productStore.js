import {create} from 'zustand'

export const useProductState = create(set=>({
    products:[],
    setProducts:(products)=>set({products}),

    createProduct:async(newProduct)=>{
        if(!newProduct.name || !newProduct.price || !newProduct.image){
            return {success:false , message:'Please Provide All Field!'}
        }    

        const res = await fetch('/api/products',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newProduct)
        })
        const data = await res.json();
        set((state)=>({products:[...state.products,data.data]})) 
        return {success:true , message:'Product add successfully'}
    }
}))