import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Basket from "./pages/Basket";

import Footer from "./Components/Footer";
import Header from "./Components/Header";

Header
const App = () => {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/basket" element={<Basket/>} />
   </Routes>
   <Footer/>
   </BrowserRouter>
  );
};

export default App;
