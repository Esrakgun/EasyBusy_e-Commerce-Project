
import { useContext } from "react";
import {BasketContext} from "../../context/basketcontext";



const Card = ({product}) => {
  //BasketContext'deki verilere eriş:
  const {basket,addToBasket} =useContext(BasketContext);
  return (
    <div className="card py-3">
      <div className="d-flex justify-content-center ">
        <img className="object-fit-contain"
        src={product.image} 
        height={120}
        alt="Card-image" />
      </div>
      <div className="card-body">
        <h4 className="text-truncate">{product.title}</h4>
        <h5 className="text-secondy">{product.category}</h5>
        <button className="btn btn-primary w-100 mt-1"  onClick={()=>addToBasket(product)}>Sepete Ekle</button>
      </div>
    </div>
  )
}

export default Card;
