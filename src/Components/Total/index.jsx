import { useContext } from 'react';
import { BasketContext } from '../../context/basketcontext';
import { toast } from 'react-toastify';

const Total = () => {
    const {basket}=useContext(BasketContext);
//  Dizideki toplam amount miktarını hesapla:
// SEPETİN TOPLAM ÜRÜN BAZINDA, TOTALİNİ HESAPLAMA:
const totalAmount=basket.reduce((acc,item) =>acc + item.amount,0);
// console.log(totalAmount);
// Toplam Ürün miktarı:Toplam fiyatı hesapla:
const totalPrice=basket.reduce((acc,item) =>acc + item.price *item.amount,0);

  return (
    <div className='rounded my-5 shadow border p-4 d-flex flex-column justify-content-between'>
     <div className='fs-5'>
     <p>Sepette <span className='text-warning fw-bold'>{totalAmount}</span> Adet Ürün Var.</p>
     <p>Toplam Fiyat:<span>{totalPrice.toFixed(2)}</span>₺</p>
     </div>
     <button onClick={()=>toast.success("Sepetiniz Onaylandı!")}
     className='btn btn-success py-2 px-3'>Sepeti Onayla</button>
    </div>
  )
}

export default Total;
