
import { BsHandbagFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import api from "../../api";
import { ProductContext } from "../../context/productcontext";

const Header = () => {
  // State Alanı:Category State'i 1.
  const [categories, setCategories] = useState([]);
// Selected Seçili Category state'i 2.
// const [selectedCategory,setSelectedCategory]=useState();
 const {setSelectedCategory}=useContext(ProductContext);


  useEffect(() => {
    api.get("/products/categories").then((res) => setCategories(res.data));
  }, []);

  // console.log(categories);
  // console.log(data);
// console.log(setSelectedCategory);
 
  

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary p-2">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <div className="d-flex gap-2 p-2">
              <span className="text-primary">
                <BsHandbagFill style={{ fontSize: 30 }} />
              </span>
              <span className="fw-bold fs-4">EasyBusy</span>
            </div>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-center">
              <li className="nav-item">
                <NavLink className="nav-link text-primary" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-primary" to="/basket">Basket</NavLink>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link text-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </a>
                <ul className="dropdown-menu">
                  {categories.map((category , index) => (
                 <button
                  key={index} 
                 className="dropdown-item text-center" 
                 onClick={()=>setSelectedCategory(category )}>
                  {category}
                  </button>
                ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};




export default Header;

