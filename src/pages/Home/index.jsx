import { useContext } from "react";
import { ProductContext } from "../../context/productcontext";

import Card from "../../Components/Card";


const Home = () => {
  // Context Alanı:
  // 1.ProductContext'deki verilere eriş:
    const {products,setProducts,selectedCategory}=useContext(ProductContext);
  
    
    // console.log(products);
    // console.log(setProducts);
    // console.log(products.length);
    // console.log(selectedCategory);
    
  return (
    <div className="mt-4 container">
      <h1>{products.length} Ürün Bulundu</h1>
      <h1>{selectedCategory !='all' && (
         <>
           <span className="text-primary">{selectedCategory}</span>
           <span> için Sonuçlar</span>
         </>
        )}
      </h1>
      <div className="wrapper">
        {products.map((product)=>(
       <Card key={product.id} product={product}/>
        ))}
      </div>
    </div>
  )
}

export default Home;
