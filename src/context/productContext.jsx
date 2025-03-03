import { createContext, useEffect, useState } from "react";
import api from "../api";

const ProductContext= createContext();
const ProductProvider = ({children}) => {
    // State Alanı:
   const [products,setProducts]=useState([]);
   const [selectedCategory,setSelectedCategory]=useState('all');

   useEffect(()=>{
    // İstek atılacak Url'i belirle:
    const url=selectedCategory==="all"
     ? "/products" 
     : `/products/category/${selectedCategory}`;
// Api'a istek at:
    api
    .get(url)
    .then((res)=>setProducts(res.data));
   },[selectedCategory]);

  return (
    <div>
     <ProductContext.Provider value={{products,setProducts,setSelectedCategory,selectedCategory}}>
    {/*  */}
     {children}
     </ProductContext.Provider>
    </div>
  )
}

export {ProductProvider,ProductContext};
