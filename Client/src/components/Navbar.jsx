// import React from 'react';
import { SiEventstore } from "react-icons/si";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center  py-3">
           <Link to={'/'} className="flex items-center gap-1 font-bold text-xl sm:text-3xl">
               <div className=""> <SiEventstore /> </div>
               <h1 className="">Store</h1>
           </Link>

           
                <Link to={'/create'} className="flex sm:gap-2 btn btn-outline px-1 sm:px-4 font-bold">
                    <p>Add new</p>
                    <i className="text-xl sm:text-3xl"><AiOutlineAppstoreAdd /></i>
                </Link>
          
        </nav>
    );
};

export default Navbar;
