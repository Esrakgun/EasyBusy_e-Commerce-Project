import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "react-toastify/dist/ReactToastify.css";
import { ProductProvider } from './context/productcontext.jsx';
import { BasketProvider} from './context/basketcontext.jsx';
import { ToastContainer} from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <BasketProvider>
  <ProductProvider>
  <StrictMode>
    <ToastContainer/>
      <App />
    </StrictMode>
  </ProductProvider>
  </BasketProvider>
);


  





