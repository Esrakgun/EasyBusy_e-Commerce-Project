import { Link } from "react-router-dom";


const BasketInfo = () => {
  return (
    <div className="text-center fs-4">
      <p> Sepete Ürün Ekle</p>

      <Link className="btn btn-primary" to="/">Ürünlere Git
      </Link>
    </div>
  )
}

export default BasketInfo ;
