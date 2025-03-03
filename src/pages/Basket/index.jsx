import { useContext } from "react";
import { BasketContext } from "../../context/basketcontext";
import BasketItem from "../../Components/BAsketItem";
import BasketInfo from "../../Components/BasketInfo";
import Total from "../../Components/Total";



const Basket = () => {
  const { basket } = useContext(BasketContext);
  return (
    <div className="container mt-5">
      <h1>SEPET</h1>
      <div className="row">
        <div className="col-lg-8">
          {basket.length===0 ? (<BasketInfo />) 
          :(basket.map((i) =>(<BasketItem key={i.id} item={i}/>)))}
         </div>
        <div className="col-lg-4">
          <Total/>
        </div>
      </div>
    </div>
  );
};

export default Basket;


